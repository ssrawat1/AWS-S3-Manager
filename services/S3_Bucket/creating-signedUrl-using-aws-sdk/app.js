import { generateDownloadSignedUrl } from './downloadSignedUrl.js';
import { generateUploadSignedUrl } from './uploadSignedUrl.js';
import { readFile } from 'fs/promises';

/* Upload Signed URL: */
const uploadSignedUrl = await generateUploadSignedUrl({
  bucketName: 'coder-army-pb-03',
  keyName: 'uploadSignedUrl.js',
  contentType: 'application/javascript',
});

console.log(uploadSignedUrl);

const res = await fetch(uploadSignedUrl, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/javascript',
  },
  body: await readFile('./uploadSignedUrl.js'),
});

const data = await res.text();
console.log(data);

/* Download Signed URL: */

const downloadSingedUrl = await generateDownloadSignedUrl({
  bucketName: 'coder-army-pb-03',
  keyName: 'uploadSignedUrl.js',
});

console.log(downloadSingedUrl);
