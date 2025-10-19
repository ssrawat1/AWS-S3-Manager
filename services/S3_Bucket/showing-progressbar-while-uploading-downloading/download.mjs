import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const s3Client = new S3Client({});

const command = new GetObjectCommand({ Bucket: 'sanjay-pb-03', Key: 'videos/coding.mp4' });

const { ContentLength, Body } = await s3Client.send(command);

let downloadedBytes = 0;

Body.on('data', (chunk) => {
  downloadedBytes += chunk.length;
  process.stdout.write(`\r Downloaded: ${((downloadedBytes / ContentLength) * 100).toFixed(2)} %`);
});

const writeStream = createWriteStream('./coding.mp4');

try {
  await pipeline(Body, writeStream);
} catch (error) {
  console.log('Download failed:', error);
}
