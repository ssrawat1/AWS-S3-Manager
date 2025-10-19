import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({});

const command = new GetObjectCommand({
  Bucket: 'sanjay-pb-03',
  Key: 'videos/coding.mp4',
});

const url = await getSignedUrl(s3Client, command);
console.log(url);
