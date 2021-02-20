import { useEffect, useState } from 'react';
import Image from "next/image";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export default function Home() {
  const [posts, setPosts] = useState([]);

  async function fetchEntries() {
    const entries = await client.getEntries();
    if (entries.items) {
      return entries.items.map((item) => ({
        title: item.fields.title,
        content: documentToHtmlString(item.fields.content),
      }));
    }
  }

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries();
      setPosts([...allPosts]);
    }

    getPosts();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          {!!posts.length
            && posts.map((post) => (
              <div key={post.title}>
                <h2>{post.title}</h2>
                {post.content}
              </div>
            ))
          }
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/bsa-norman-rockwell.jpg"
            className="rounded-full"
            width={500}
            height={750}
          />
        </div>
      </div>
    </div>
  )
}
