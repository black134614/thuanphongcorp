import { DOMAIN } from '@/configs/configs'
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { per_page = 10, page = 1 } = req.query;

    const apiUrl = `${DOMAIN}posts?page=${page}&per_page=${per_page}&offset=${
      page === '1' ? '1' : '0'
    }`;

    const response = await fetch(apiUrl);
    const posts = await response.json();

    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);

    const postsWithFeaturedImages = await Promise.all(
      posts.map(async (post: any) => {
        const featuredImageId = post.featured_media;
        const featuredImageUrl = `${DOMAIN}media/${featuredImageId}`;
        const featuredImageResponse = await fetch(featuredImageUrl);
        const featuredImageData = await featuredImageResponse.json();

        return {
          ...post,
          featuredImage: featuredImageData.source_url,
          featuredAltImage: featuredImageData.alt_text,
        };
      })
    );

    res.status(200).json({ posts: postsWithFeaturedImages, totalPages });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
