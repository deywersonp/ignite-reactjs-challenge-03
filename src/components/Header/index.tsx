import Link from 'next/link';
import styles from './header.module.scss';
import commonStyles from '../../styles/common.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={commonStyles.container}>
      <div className={styles.header}>
        <Link href="/">
          <a>
            <img src="/images/Logo.png" alt="Logo" />
          </a>
        </Link>
      </div>
    </header>
  );
}
