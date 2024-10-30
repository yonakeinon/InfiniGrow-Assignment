const groupMetricsByFilters = require('./groupMetrics');

// Example data to test the function
const metricsWithFilters = {
    metric1: [
        { kind: 'custom', data: { variant: 0, selectedOptions: ['End Customer'] } },
        { kind: 'custom', data: { variant: 2, selectedOptions: ['true'] } }
    ],
    metric2: [
        { kind: 'custom', data: { variant: 0, selectedOptions: ['End Customer'] } },
        { kind: 'custom', data: { variant: 2, selectedOptions: ['true'] } }
    ],
    metric3: [
        { kind: 'custom', data: { variant: 2, selectedOptions: ['Channel Led'] } },
        { kind: 'custom', data: { variant: 0, selectedOptions: ['New Customer', 'Upsell'] } }
    ],
    metric4: [
        { kind: 'custom', data: { variant: 2, selectedOptions: ['Channel Led'] } },
        { kind: 'custom', data: { variant: 0, selectedOptions: ['New Customer', 'Upsell'] } }
    ]
};

// Call the function and print the result
const groupedMetrics = groupMetricsByFilters(metricsWithFilters);
console.log(JSON.stringify(groupedMetrics, null, 4));
