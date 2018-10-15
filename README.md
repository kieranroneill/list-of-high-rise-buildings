# List of cities with high-rise buildings

Displays the table of cities and their number of high-rise buildings.

#### Table of contents

* [Getting started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Prerequisites](#prerequisites)
* [Usage](#usage)
* [Development](#development)
* [Testing](#testing)

## Getting started

In order to get everything set up, you must install the following dependencies.

### Prerequisites

* Install [Node.js v8.11.2+](https://nodejs.org/en/)
* Install [Yarn](https://yarnpkg.com/lang/en/docs/install)
* Install dependencies:
```bash
yarn install
```

## Usage

* To build and start the application, run:
```bash
yarn start
```
* Once built, navigate to [http://localhost:8899](http://localhost:8899).

### Development

The development environment is setup using `webpack-dev-server` with live-reloading implemented, therefore, changes in the code should be auto-refreshed on the browser.

* To build and start the application, run:
```bash
yarn start:dev
```
* The webpage can be accessed via [http://localhost:1337](http://localhost:1337).
* The API will be running on [http://localhost:8899](http://localhost:8899), however, `webpack-dev-server` proxies all API requests, via the webpage, to the running API.

### Testing

* Run tests using:
```bash
yarn test
```
