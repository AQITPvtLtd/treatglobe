import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { writeFile } from "fs/promises";
import { v4 as uuid } from "uuid";
import { google } from "googleapis";
import data from "../../../../jsonkey.json";

export const POST = async (req) => {
  const fileData = await req.formData();
  const unique_id = uuid();
  const file = await fileData.get("myFile");
  const identityFile = await fileData.get("identity");

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

    // Upload files to Google Drive
    const authClient = await authorize();
    await uploadFile(authClient, unique_id, file, identityFile);

    // Return success response
    return NextResponse.json({
      Message: "File Upload successful",
      success: true,
    });
  } catch (error) {
    console.error("Error occurred: ", error);
    return NextResponse.json({
      Message: "File Upload unsuccessful",
      success: false,
    });
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
