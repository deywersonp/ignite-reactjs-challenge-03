import Link from 'next/link';
import styles from './header.module.scss';
import commonStyles from '../../styles/common.module.scss';

interface Props {
  isHomePage?: boolean;
}

export default function Header({ isHomePage }: Props): JSX.Element {
  return (
    <header className={commonStyles.container}>
      <div
        className={styles.header}
        style={{
          margin: isHomePage ? '4.971rem auto 4.051rem' : '2.5rem auto 2.46rem',
        }}
      >
        <Link href="/">
          <a>
            <img src="/images/Logo.png" alt="Logo" />
          </a>
        </Link>
      </div>
    </header>
  );
}
