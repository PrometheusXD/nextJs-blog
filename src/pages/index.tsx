import { useEffect } from 'react';
import { loadPosts } from '../api/load-posts';

export default function Index() {
  useEffect(() => {
    loadPosts({
      authorSlug: 'lucas-da-silva',
    }).then((r) => console.log(r));
  }, []);

  return <h1>bla</h1>;
}
