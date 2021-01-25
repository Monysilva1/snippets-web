// This snippet file was generated by processing the source file:
// ./storage-next/upload-files.js
//
// To make edits to the snippets in this file, please edit the source

// [START storage_upload_metadata_modular]
import { getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage(firebaseApp);
const storageRef = ref(storage, 'images/mountains.jpg');

// Create file metadata including the content type
/** @type {any} */
const metadata = {
  contentType: 'image/jpeg',
};

// Upload the file and metadata
const uploadTask = uploadBytes(storageRef, file, metadata);
// [END storage_upload_metadata_modular]