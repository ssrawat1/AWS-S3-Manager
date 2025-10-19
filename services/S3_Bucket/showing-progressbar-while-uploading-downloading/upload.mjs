import { S3Client } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import { createReadStream } from 'node:fs';

const s3Client = new S3Client({});

const readStream = createReadStream('C:\\Users\\ss402\\Pictures\\Camera Roll\\coding.mp4');

try {
  const s3Uploads = new Upload({
    client: s3Client,
    params: {
      Bucket: 'sanjay-pb-03',
      Key: 'videos/coding.mp4',
      Body: readStream,
      ContentType: 'video/mp4',
    },
    // queueSize: 2,
  });

  s3Uploads.on('httpUploadProgress', ({ loaded, total }) => {
    process.stdout.write(`\r Uploading: ${((loaded / total) * 100).toFixed(2)} %`);
  });

  const res = await s3Uploads.done();
  // console.log('Response:', res);
} catch (error) {
  console.log(error);
}
