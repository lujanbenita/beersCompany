import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import MainLayout from '../../components/layouts/mainLayout';
import { POSTS } from '../../data/posts';

const nextPrevPost = (currentId) => {
  const prev = POSTS.find(i => i.id === currentId - 1)
  const next = POSTS.find(i => i.id === currentId + 1)

  return (
    {
      prev,
      next,
      total: POSTS.length
    }
  )
}

const PostDetail = () => {
  const router = useRouter()

  const [post, setPost] = useState()
  const [nextPrev, setNextPrev] = useState()
  
  useEffect(() => {
    const currentPost = POSTS.find(i => i.path === router.asPath)
    setPost(currentPost)
    if (currentPost) return setNextPrev(nextPrevPost(currentPost.id));
  
  },[router])

  
  return (
    <MainLayout className="isfixed">
      {post !== undefined &&
        <div className="post">

          <Link href="/blog">
            <a className="comeback">Back</a>
          </Link>

          <div className="head-page" style={{backgroundImage: `url(${post.img})`}}>
            <div className="container__head">
              <div>
                <h1>BLOG</h1>
                <h3>Onto your next adventure</h3>
              </div>
            </div>
          </div>

          <div className="post__content">
            <h4>{ post.date }</h4>
            <h2>{ post.title }</h2>
            <p className="post__text">{ post.content }</p>
          </div>

          <div className="post__prev-next-container">
            <Link href={nextPrev.prev !== undefined ? nextPrev.prev.path : ""}>
              <a className={nextPrev.prev === undefined ? "inactive" : "post__prev-next"}> Previous </a>
            </Link>
            <Link href={nextPrev.next !== undefined ? nextPrev.next.path : ""}>
              <a className={nextPrev.next === undefined ? "inactive" : "post__prev-next"}> Next </a>
            </Link>
          </div>

        </div>
      }
    </MainLayout>
  );
};

export default PostDetail;