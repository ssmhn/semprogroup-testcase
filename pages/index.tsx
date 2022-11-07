import Head from 'next/head';
import styles from '../styles/index.module.scss';
import { Container } from '../components/Container/Container';
import { CoopForm } from '../components/CoopForm/CoopForm';
import { CoopInfo } from '../components/CoopInfo/CoopInfo';
import { CoopLayout } from '../components/CoopLayout/CoopLayout';
import { Header } from '../components/Header/Header';

export default function Home() {
  return (
    <div className={styles.index_wrapper}>
      <Head>
        <title>Testcase</title>
        <meta name="description" content="semprogroup testcae" />
      </Head>
      <Header />
      <main className={styles.index_main}>
        <Container>
          <CoopLayout>
            <CoopInfo />
            <CoopForm />
          </CoopLayout>
        </Container>
      </main>
    </div>
  )
}
