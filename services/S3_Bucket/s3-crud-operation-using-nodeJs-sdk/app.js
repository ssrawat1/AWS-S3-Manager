import {
  CreateBucketCommand,
  DeleteBucketCommand,
  DeleteObjectCommand,
  DeleteObjectsCommand,
  GetObjectCommand,
  ListBucketsCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createWriteStream } from 'fs';

const s3Client = new S3Client(); // if you already setup the aws cli in your system,it automatically read the credentials from .aws file file otherwise you have to explicitly set the credentials.

/* Create Bucket: */

// const command = new CreateBucketCommand({
//   Bucket: 'sanjay-pb-03',
// });

// await s3Client.send(command);
// console.log('Bucket Created');

/* List All Buckets: */

// const listCommand = new ListBucketsCommand({});
// const res = await s3Client.send(listCommand);
// console.log(res.Buckets);

/* To Delete Empty Bucket: */

// const deleteCommand = new DeleteBucketCommand({
//   Bucket: 'my-first-aws-bucket-pb-03',
// });

// const res = await s3Client.send(deleteCommand);
// console.log(res);

/* To Delete the nested Objects */

// const listAllCommand = new ListObjectsV2Command({
//   Bucket: 'publically-serving-bucket',
//   Prefix:"Temp/Duumy/" // need only when we want to delete from specific folder
// });

// const { Contents } = await s3Client.send(listAllCommand);
// const allKeys = Contents.map(({ Key }) => ({ Key }));

// const allObjectCommand = new DeleteObjectsCommand({
//   Bucket: 'publically-serving-bucket',
//   Delete: {
//     Objects: allKeys,
//   },
// });

// const res = await s3Client.send(allObjectCommand);
// console.log(res);

/* Get the object Data: */

// const objectCommand = new GetObjectCommand({
//   Bucket: 'publically-serving-bucket',
//   Key: 'Temp/.env',
// });

// const res = await s3Client.send(objectCommand);
// manually reading data:
// res.Body.on('data', (chunk) => {
//   console.log(chunk.toString());
// });

// In build method:
// const fileData = await res.Body.transformToString();
// console.log(fileData)

// Saving image object into the file using the pipe:
// const writeStream = createWriteStream('backend.png');
// res.Body.pipe(writeStream);

// saving the object into the file using pipeline
// const writeStream = createWriteStream('backend.png');
// await pipeline(res.Body, process.stdout);

/* To Upload the file: */

// const uploadCommand = new PutObjectCommand({
//   Bucket: 'publically-serving-bucket',
//   Key: 'upload/backed.png',
//   Body: createReadStream('./backend.png'),
//   ContentType: 'image/png',
// });

// const res = await s3Client.send(uploadCommand);
// console.log(res);


 