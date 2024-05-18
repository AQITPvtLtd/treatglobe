import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { writeFile } from "fs/promises";
import { v4 as uuid } from "uuid";
import nodemailer from "nodemailer";
import connection from "../../../helper/db";
export const POST = async (req, res) => {
  const fileData = await req.formData();
  const unique_id = uuid();
  const file = await fileData.get("myFile");
  const identityFile = await fileData.get("identity");
  const firstName = await fileData.get("firstName");
  const lastName = await fileData.get("lastName");
  const phone = await fileData.get("phone");
  const email = await fileData.get("email");
  const message = await fileData.get("message");

  //folder path
  const folderPath = path.join(process.cwd(), "public/documents", unique_id);
  fs.mkdirSync(folderPath);

  //medical report
  const buffer = Buffer.from(await file.arrayBuffer());
  const buffer2 = Buffer.from(await identityFile.arrayBuffer());
  const medical = "medical" + file.name.replaceAll(" ", "_");
  const iden = "identity" + identityFile.name.replaceAll(" ", "_");
  try {
    await writeFile(
      path.join(process.cwd(), `public/documents`, unique_id, medical),
      buffer
    );
    await writeFile(
      path.join(process.cwd(), `public/documents`, unique_id, iden),
      buffer2
    );
    const rows = await new Promise((resolve, reject) => {
      // Perform the database query
      connection.query(
        "INSERT INTO contact (id, first_name, last_name, phone, email, medical_report, identity_proof, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [unique_id, firstName, lastName, phone, email, medical, iden, message],
        (err, results, fields) => {
          if (err) {
            console.log(err);
            reject(err); // Reject the promise if there's an error
          } else {
            resolve(results); // Resolve the promise with the query results
          }
        }
      );
    });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });
    var mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: "Treat Globe Contact form",
      html: `<html lang="en">
          <head>
            <meta charset="utf-8">
      
            <title>Treat Globe Enquiry Form</title>
            <meta name="description" content="Genelab Enquiry Form">
            <meta name="author" content="SitePoint">
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
            <link rel="stylesheet" href="css/styles.css?v=1.0">
      
          </head>
      
          <body>
            <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';"></div>
                  <div class="container" style="margin-left: 20px;margin-right: 20px;">
                  <h3>You've got a new mail from ${
                    firstName + " " + lastName
                  }, their email is: ✉️${email} </h3>
                  <div style="font-size: 16px;">
                  <p>Message:</p>
                  <p>${message}</p>
                  <br>
                  </div>
                  </div>
          </body>
          </html>`,
    };
    transporter.sendMail(mailOptions);
    return NextResponse.json({ Message: "Success", success: true });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", success: false });
  }
};
