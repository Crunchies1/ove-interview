This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# OVE Interview Part 1

### Thoughts

I enjoyed the project and wished that I could do more to extend the webservice's functionality. Ratesapi.io was simple to use and the open ended question meant I could play around more with the frontend and try and add my own extensions. 

## Getting Started

All you need to get the website up and running:

```bash
npm run devserver
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Dependencies

Modules used to run the program: 

```
@chakra-ui/react
@emotion/react
@emotion/styled
axios
chai
chai-http
chart.js
concurrently
cors
eslint-plugin-react
express
framer-motion
mocha
next
react
react-chartjs-2
react-dom
react-router-dom
```


## Usage guide 

The website should be intuitive to control, as there are only two buttons to click in order to interact with the website. These allow you to change the timeframe of the data and see how it changed with respect to longer timeframes. It also allows you the change the base symbol.

### Other Features

There is support for smaller screens as well as larger screens, with the main container shifting in size in order to accomodate different sized screens. An example is shown below. There are simple server tests implemented using mocha, simply run npm test to run these tests.

### Large Screen

![largeScreen](https://imgur.com/o0vcowN)

### Small Screen

![smallScreen](https://imgur.com/x65AsdX)