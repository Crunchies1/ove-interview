This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# OVE Interview Part 1

### Thoughts

I enjoyed the project and wished that I could do more to extend the webservice's functionality. Ratesapi.io was simple to use and the open ended question meant I could play around more with the frontend and try and add my own extensions. 

## Getting Started

All you need to get the website up and running:

```bash
npm run devserver
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The server is located at port 3001. 

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

### API Calls

Retrieve status of service.
GET http://localhost:3001/api/status HTTP/2

Retrieve price of current with respect to base.
GET http://localhost:3001/api/info?base=EUR&current=AUD HTTP/2

### Other Features

There is support for smaller screens as well as larger screens, with the main container shifting in size in order to accomodate different sized screens. An example is shown below. There are simple server tests implemented using mocha, simply run npm test to run these tests.

### Large Screen

![largeScreen](https://imgur.com/o0vcowN.png)

### Small Screen

![smallScreen](https://imgur.com/x65AsdX.png)

## How to extend

In order to extend the project, I will detail how the code works here. The main bulk of the index file comes from the CurrencyStack.js file inside components. This is what renders the rows of currencies, alongside their graphs and colorings. The header is rendered in Default.js under DefaultLayout inside layouts. The data comes from the calculator.js file inside the state folder, which essentially does all the hard work of fetching, caching and creating the correct for the index file. It can easily be extended by adding functions there and to the switch case.

File Structure

.\
+-- _client\
|   +-- _public\
|   +-- _src\
|       +-- _components\
|           +-- _layouts (Default.js here!)\
|           +-- components (CurrencyStack.js here!)\
|       +-- _pages\
|           +-- _api\
|           +-- pages\
|       +-- _styles\
|       +-- _state (calculator.js here!)\
+-- _server\
|   +-- _endpoints\
|       +-- info.js\
|       +-- status.js\
|   +-- _test\
|       +-- server.test.js\
|   +-- server.js\
+-- .eslintrc.js\
+-- package.json