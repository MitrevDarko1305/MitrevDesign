import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mitrevdarko.dev',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://mitrevdarko.dev/en',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://mitrevdarko.dev/de',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://mitrevdarko.dev/en/blog/design-is-not-decoration',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://mitrevdarko.dev/de/blog/design-is-not-decoration',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://mitrevdarko.dev/en/blog/design-is-not-decoration/clarity-is-the-foundation-of-high-performing-design',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://mitrevdarko.dev/de/blog/design-is-not-decoration/clarity-is-the-foundation-of-high-performing-design',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://mitrevdarko.dev/en/blog/design-is-not-decoration/what-actually-goes-into-high-converting-website',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://mitrevdarko.dev/de/blog/design-is-not-decoration/what-actually-goes-into-high-converting-website',
      lastModified: new Date(),
      priority: 0.8,
    },
  ]
}