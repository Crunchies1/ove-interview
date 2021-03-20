import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Heading, Link, Text, Flex, Box } from '@chakra-ui/react'
import { calculator, FETCH_DATA } from './state/calculator'
import { DEFAULT_BASE } from './api/actions'
import DefaultLayout from '../components/layouts/Default'
import CurrencyStack from '../components/CurrencyStack'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [rateData, setRateData] = useState([])

  // At the start, we want to display the rates in terms of EUR
  useEffect(async () => {
    let data = await calculator(FETCH_DATA, DEFAULT_BASE, 7)
    setRateData(data)
  }, [])

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

          <Flex flexWrap="wrap" alignItems="center" justifyContent="center" maxW="800px" mt="10">
            <CurrencyStack
              rows={rateData}
            />
          </Flex>
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
