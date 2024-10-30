# Metrics Grouping Project

## Overview
This project provides a function to group metrics based on identical filter criteria. It ensures that metrics sharing the same filters are grouped together. This is especially useful for data analysis, where users need to compare data with identical filtering conditions.

## Project Structure
- **`src/groupMetrics.js`**: Contains the core function (`groupMetricsByFilters`) to group metrics based on their filters.
- **`src/index.js`**: An entry point for testing the function with example data.
- **`test/groupMetrics.test.js`**: Unit tests for the `groupMetricsByFilters` function.


## Setup and Installation

1. **Clone the repository**:
```sh
git clone <repository_url>
```
2. **Navigate into the project directory**:
```sh
  cd InfiniGrow-Assignment
```

3. **Install dependencies**:
```sh
npm install
```

## Usage
To run the function with sample data provided in `src/index.js`:

1. **Run the start script**:
```sh
npm start
```
2. This will execute `src/index.js`, which calls `groupMetricsByFilters` with sample data and logs the grouped metrics result to the console.


## Testing
To ensure the function works as expected, you can run the provided unit tests:

1. **Run the tests**:
```sh
npm test
```
2. The test file `test/groupMetrics.test.js` contains example cases to verify the functionality of `groupMetricsByFilters`. These tests check that metrics with identical filters are grouped correctly.

## Function Details
The `groupMetricsByFilters` function:

- Takes an object where each key is a metric name, and the value is an array of filter objects.

- Groups metrics with identical filters.

- Returns an array of objects, each containing:
    - `metrics`: An array of metric names that share identical filters.
    - `filters`: The shared filter criteria for these metrics.


## Error Handling
The function includes error handling to:
  - Skip invalid filter formats.
  - Throw an error if the input data is not an object.