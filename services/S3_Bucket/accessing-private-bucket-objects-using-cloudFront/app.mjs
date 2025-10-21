/* Commands to create private and public keys.
Private Key: openssl genrsa -out private_key.pem 2048
Public Key: openssl rsa -in private_key.pem -pubout -out public_key.pem */

import { getSignedUrl } from '@aws-sdk/cloudfront-signer';
import { readFile } from 'node:fs/promises';

const cloudFrontDistributionDomain = process.env.CLOUD_FRONT_DISTRIBUTION_DOMAIN;

const s3ObjectKey = process.env.S3_OBJECT_KEY;

const url = `${cloudFrontDistributionDomain}/${s3ObjectKey}`;

const privateKey = await readFile('./private_key.pem', 'utf-8');

const keyPairId = process.env.CLOUD_FRONT_KEY_PAIR_ID;

console.log({ cloudFrontDistributionDomain, s3ObjectKey, keyPairId ,url});

const signedUrl = getSignedUrl({
  url,
  keyPairId,
  dateLessThan: '2025-10-22',
  privateKey,
});

console.log(signedUrl);
