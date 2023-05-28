import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.dlouck.com',
      lastModified: new Date(),
    }
  ];
}