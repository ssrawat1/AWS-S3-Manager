// https://aws.amazon.com/cloudfront/features/?nc=sn&amp;loc=2
// https://tools.keycdn.com/performance  => open the file from different countries for performance test
import { CloudFrontClient, CreateInvalidationCommand } from '@aws-sdk/client-cloudfront';

const client = new CloudFrontClient({});

const command = new CreateInvalidationCommand({
  DistributionId: 'EZ4IAMDX58B26',
  InvalidationBatch: {
    CallerReference: crypto.randomUUID(),
    Paths: {
      Quantity: 1,
      Items: ['/loginProcess.txt'],
    },
  },
});

const res = await client.send(command);
console.log(res);
