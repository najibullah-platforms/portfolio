import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, // your project ID
  dataset: 'production',
  apiVersion: '2023-01-01', // use latest or current date
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN, // only needed for write access
});

// Setup image builder
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
