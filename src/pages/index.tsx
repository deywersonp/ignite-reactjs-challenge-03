import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { FiCalendar, FiUser } from 'react-icons/fi';
import Header from '../components/Header';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>spacetraveling.</title>
      </Head>

      <Header />

      <main className={commonStyles.container}>
        <div className={styles.post}>
          <Link href="/">
            <a>
              <h1>Como utilizar Hooks</h1>
              <p>Pensando em sincronização em vez de ciclos de vida.</p>
              <div className={styles.infoContainer}>
                <div>
                  <FiCalendar />
                  <time>15 Mar 2021</time>
                </div>
                <div>
                  <FiUser />
                  <span>Joseph Oliveira</span>
                </div>
              </div>
            </a>
          </Link>

          <button type="button" title="Carregar mais posts">
            Carregar mais posts
          </button>
        </div>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient({});
//   // const postsResponse = await prismic.getByType(TODO);

//   // TODO
// };
