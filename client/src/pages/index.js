import Head from 'next/head'
import Image from 'next/image'
import DefaultLayout from '../components/layouts/Default'
import { Heading, Link, Text, Box } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <DefaultLayout>
      <Box className={styles.container}>
        <Head>
          <title>Rates Imperial</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Heading as="h1" size="2xl" mb="2">
            Welcome to <Link color="teal.500">Rates Imperial!</Link>
          </Heading>

          <Text fontSize="xl" mt="2">
            See the exchange rates for most currencies here!
          </Text>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <Image
              src="/vercel.svg" // Route of the image file
              height={70} // Desired size with correct aspect ratio
              width={70} // Desired size with correct aspect ratio
              alt="Vercel Logo"
            />
          </a>
        </footer>
      </Box>
    </DefaultLayout>
  )
}
