import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Heading, Link, Text, Flex, Box } from '@chakra-ui/react'
import { calculator, FETCH_DATA } from '../state/calculator'
import { DEFAULT_BASE } from './api/actions'
import DefaultLayout from '../components/layouts/Default'
import CurrencyStack from '../components/CurrencyStack'
import styles from '../styles/Home.module.css'

export default function Home () {
  const [base, setBase] = useState(DEFAULT_BASE) // eslint-disable-line no-unused-vars
  const [timeframe, setTimeframe] = useState(7) // eslint-disable-line no-unused-vars
  const [rateData, setRateData] = useState([])
  const [symbolList, setSymbolList] = useState([])

  // This function automatically changes our state based on the incoming variable
  // then updates the website accordingly
  async function loadData (change = null) {
    let data
    if (change !== null) {
      if (typeof change === 'number') {
        setTimeframe(change)
        data = await calculator(FETCH_DATA, base, change)
      } else {
        setBase(change)
        data = await calculator(FETCH_DATA, change, timeframe)
      }
    } else {
      data = await calculator(FETCH_DATA, base, timeframe)
    }
    // Set the rate data and symbol list
    setRateData(data)
    console.log(data)
    const symbols = []
    Object.keys(data).map((c) =>
      symbols.push(c)
    )
    setSymbolList(symbols)
  }

  // At the start, we want to display the rates in terms of EUR
  useEffect(() => {
    loadData()
  }, [])

  return (
    <DefaultLayout
      symbols={symbolList}
      loadData={loadData}
    >
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
