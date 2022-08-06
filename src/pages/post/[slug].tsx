import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';
import Header from '../../components/Header';

import { getPrismicClient } from '../../services/prismic';

import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post(): JSX.Element {
  return (
    <>
      <Head>
        <title>Post | spacetraveling.</title>
      </Head>

      <Header />

      <main className={styles.container}>
        <img src="/images/Banner.png" alt="Banner" />

        <article className={styles.post}>
          <h1>Criando um app CRA do zero</h1>
          <div className={styles.infoContainer}>
            <div>
              <FiCalendar />
              <time>15 Mar 2021</time>
            </div>
            <div>
              <FiUser />
              <address className="author">Joseph Oliveira</address>
            </div>
            <div>
              <FiClock />
              <span>4 min</span>
            </div>
          </div>
          <h2>Proin et varius</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dolor sapien, vulputate eu diam at, condimentum hendrerit tellus.
            Nam facilisis sodales felis, pharetra pharetra lectus auctor sed. Ut
            venenatis mauris vel libero pretium, et pretium ligula faucibus.
            Morbi nibh felis, elementum a posuere et, vulputate et erat. Nam
            venenatis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dolor sapien, vulputate eu diam at, condimentum hendrerit tellus.
            Nam facilisis sodales felis, pharetra pharetra lectus auctor sed. Ut
            venenatis <a>mauris vel libero pretium</a>, et pretium ligula
            faucibus. Morbi nibh felis, elementum a posuere et, vulputate et
            erat. Nam venenatis.
          </p>
        </article>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient({});
//   const posts = await prismic.getByType(TODO);

//   // TODO
// };

// export const getStaticProps = async ({params }) => {
//   const prismic = getPrismicClient({});
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
