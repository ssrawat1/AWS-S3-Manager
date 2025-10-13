import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

/* Create S3 Client */
const s3Client = new S3Client({
  region: 'ap-south-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

/* Generate a Signed URL for Upload */

export async function generateUploadSignedUrl({ bucketName, keyName, contentType }) {
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: keyName,
    ContentType: contentType,
  });
  return await getSignedUrl(s3Client, command, { expiresIn: 3600 });
}
