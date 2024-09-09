import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { writeFile } from "fs/promises";
import { v4 as uuid } from "uuid";
import nodemailer from "nodemailer";
import connection from "../../../helper/db";
import { google } from "googleapis";
import data from "../../../../jsonkey.json";

export const POST = async (req) => {
  const fileData = await req.formData();
  const unique_id = uuid();
  const file = await fileData.get("myFile");
  const identityFile = await fileData.get("identity");
  const firstName = await fileData.get("firstName");
  const lastName = await fileData.get("lastName");
  const phone = await fileData.get("phone");
  const email = await fileData.get("email");
  const message = await fileData.get("message");

  // Folder path for storing files
  const folderPath = path.join(process.cwd(), "public/documents", unique_id);
  fs.mkdirSync(folderPath, { recursive: true });

  // Convert file data to buffer
  const buffer = Buffer.from(await file.arrayBuffer());
  const buffer2 = Buffer.from(await identityFile.arrayBuffer());

  // Define filenames with extensions
  const medical = `${unique_id}medical${path.extname(file.name)}`;
  const iden = `${unique_id}identity${path.extname(identityFile.name)}`;

  try {
    // Write files to disk
    await writeFile(path.join(folderPath, medical), buffer);
    await writeFile(path.join(folderPath, iden), buffer2);

    // Insert data into MySQL database
    const rows = await new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO contact (id, first_name, last_name, phone, email, medical_report, identity_proof, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [unique_id, firstName, lastName, phone, email, medical, iden, message],
        (err, results) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });

    // Nodemailer configuration for sending emails
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    // Send email to admin
    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: "Treat Globe Contact form",
      attachments: [
        {
          filename: medical,
          path: path.join(folderPath, medical),
        },
        {
          filename: iden,
          path: path.join(folderPath, iden),
        },
      ],
      html: `<html>
              <body>
                <h3>You've got a new mail from ${firstName} ${lastName}, their email is: ✉️${email}</h3>
                <p>Message:</p>
                <p>${message}</p>
              </body>
             </html>`,
    });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: email,
      subject: "Thank You for contacting TreatGlobe!",
      html: `<html>
              <body>
                <h2>Hey ${firstName},</h2>
                <p>Your query is noted! Our team will contact you as soon as possible.</p>
              </body>
             </html>`,
    });

    // Upload files to Google Drive
    const authClient = await authorize();
    await uploadFile(authClient, unique_id, file, identityFile);

    // Return success response
    return NextResponse.json({ Message: "Success", success: true });
  } catch (error) {
    console.error("Error occurred: ", error);
    return NextResponse.json({ Message: "Failed", success: false });
  }
};

// Scope for Google Drive access
const SCOPE = ["https://www.googleapis.com/auth/drive"];

// Authorize Google Drive API
async function authorize() {
  const jwtclient = new google.auth.JWT(
    data.client_email,
    null,
    data.private_key,
    SCOPE
  );
  await jwtclient.authorize();
  return jwtclient;
}

// Upload files to Google Drive
async function uploadFile(authClient, unique_id, file, identityFile) {
  const drive = google.drive({ version: "v3", auth: authClient });

  // Upload Medical Report
  const medicalPath = path.join(
    process.cwd(),
    "public/documents",
    unique_id,
    `${unique_id}medical${path.extname(file.name)}`
  );
  const fileMetaData1 = {
    name: `${unique_id}medical${path.extname(file.name)}`,
    parents: ["1VYv4_cHKzLw_9VtL7G1BnX8Ygf23Tf9H"], // Update with your folder ID
  };
  await drive.files.create({
    resource: fileMetaData1,
    media: {
      body: fs.createReadStream(medicalPath),
      mimeType: file.mimetype || "application/pdf",
    },
    fields: "id",
  });

  // Upload Identity Proof
  const identityPath = path.join(
    process.cwd(),
    "public/documents",
    unique_id,
    `${unique_id}identity${path.extname(identityFile.name)}`
  );
  const fileMetaData2 = {
    name: `${unique_id}identity${path.extname(identityFile.name)}`,
    parents: ["1VYv4_cHKzLw_9VtL7G1BnX8Ygf23Tf9H"], // Update with your folder ID
  };
  await drive.files.create({
    resource: fileMetaData2,
    media: {
      body: fs.createReadStream(identityPath),
      mimeType: identityFile.mimetype || "application/pdf",
    },
    fields: "id",
  });
}
