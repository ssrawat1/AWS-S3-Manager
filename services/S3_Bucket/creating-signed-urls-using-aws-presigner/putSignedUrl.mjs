import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({});

const command = new PutObjectCommand({
  Bucket: 'sanjay-pb-03',
  Key: 'videos/Aesthetic.mp4',
  ContentType: 'video/mp4',
});

const presigned = await getSignedUrl(s3Client, command, {
  signableHeaders: new Set(['content-type']),
});
console.log(presigned);
