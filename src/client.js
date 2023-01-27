import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'h0f6qxwr',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skTF7PCqO3FpPRNCbOlsLGOYftBQQMDNoTfy1Zm1JI4lZzWpxnO7RN2nnHbsizxnIxWrMMZ2ypjxwwvuwcpA2DLuoIUQHzfoE2oxWnL5quv8l7YwJWjpJX5nVjjRUpYaUcSDWN1sBEq8oZ0Pk4GFPOsqPbDAwwduoPaKirdHm6TjQcuFrg1o',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
