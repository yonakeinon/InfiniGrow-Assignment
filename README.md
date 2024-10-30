# Metrics Grouping Project

## Overview
This project provides two core functions:
- `groupMetricsByFilters`: Groups metrics based on identical filter criteria, making it useful for data analysis where users need to compare metrics with the same filtering conditions.
- `mergeIdentities`: Merges customer identities based on shared entities or email domains, enabling a consolidated view of customer journeys.

## Project Structure
- **`src/groupMetrics.js`**: Contains the core function (`groupMetricsByFilters`) to group metrics based on their filters.
- **`src/mergeIdentities.js`**: Contains the function (`mergeIdentities`) to merge customer identities based on shared attributes or email domains.
- **`src/index.js`**: An entry point for testing both functions with example data.
- **`test/groupMetrics.test.js`**: Unit tests for `groupMetricsByFilters`.
- **`test/mergeIdentities.test.js`**: Unit tests for `mergeIdentities`.


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
To run each function individually:

1. **Run** `groupMetricsByFilters` **with sample data**:
```sh
npm run run:groupMetrics
```
2. **Run** `mergeIdentities` **with sample data**:
```sh
npm run run:mergeIdentities
```

These commands will execute the specified function and log the results to the console.

## Testing
To ensure the function works as expected, you can run the provided unit tests:

1. **Run the tests**:
```sh
npm test
```
2. The test files `test/groupMetrics.test.js` and `test/mergeIdentities.test.js` contain example cases to verify the functionality of each function. These tests check that `groupMetricsByFilters` groups metrics correctly based on identical filters, and `mergeIdentities` consolidates identities with any shared entities or matching email domains.

## Function Details
### The `groupMetricsByFilters` function:

- Takes an object where each key is a metric name, and the value is an array of filter objects.

- Groups metrics with identical filters.

- Returns an array of objects, each containing:
    - `metrics`: An array of metric names that share identical filters.
    - `filters`: The shared filter criteria for these metrics.


### the `mergeIdentities` Function:
  - Takes an array of customer identity objects, where each identity may contain attributes such as `account_name`, `account_id`, `deal_id`, `email`, and `contact_id`.
  - Merges identities that share a common entity or have the same email domain.
  - Returns an array of objects, each containing:
      - `account_name`: An array of unique account names associated with the merged group.
      - `account_id`: An array of unique account IDs in the merged group.
      - `deal_id`: An array of unique deal IDs in the merged group.
      - `email`: An array of unique emails in the merged group.
      - `contact_id`: An array of unique contact IDs in the merged group.


## Error Handling
Both functions include error handling:
  - `groupMetricsByFilters`:
      - Skips invalid filter formats.
      - Throws an error if the input data is not an object.
  - `mergeIdentities`:
     - Throws an error if the input data is not an array.
     - Ensures unique entries within each merged identity group to avoid duplicates.