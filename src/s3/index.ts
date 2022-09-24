import { S3_HOST, S3_PORT, S3_USER, S3_PASSWORD } from '@config';

export const s3Connection = {
  endPoint: S3_HOST,
  port: parseInt(S3_PORT, 10),
  secure: true,
  accessKey: S3_USER,
  secretKey: S3_PASSWORD,
};
