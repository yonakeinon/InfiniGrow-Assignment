const groupMetricsByFilters = require('./groupMetrics');
const mergeIdentities = require('./mergeIdentities');

// Example data to test the groupMetricsByFilters function
const metricsWithFilters = {
    metric1: [
        { kind: 'custom', data: { variant: 0, selectedOptions: ['End Customer'] } },
        { kind: 'custom', data: { variant: 2, selectedOptions: ['true'] } }
    ],
    metric2: [
        { kind: 'custom', data: { variant: 0, selectedOptions: ['End Customer'] } },
        { kind: 'custom', data: { variant: 2, selectedOptions: ['true'] } }
    ]
};

// Example data to test the mergeIdentities function
const identities = [
    {
        account_name: 'bijihadina',
        account_id: 233,
        deal_id: null,
        email: 'guy@infinigrow.com',
        contact_id: 1
    },
    {
        account_name: 'infinigrow',
        account_id: 243,
        deal_id: 23,
        email: 'dor@infinigrow.com',
        contact_id: 2
    },
    {
        account_name: null,
        account_id: null,
        deal_id: 23,
        email: 'lee@gmail.com',
        contact_id: null
    }
];

console.log("Grouped Metrics:");
const groupedMetrics = groupMetricsByFilters(metricsWithFilters);
console.log(JSON.stringify(groupedMetrics, null, 4));

console.log("\nMerged Identities:");
const mergedIdentities = mergeIdentities(identities);
console.log(JSON.stringify(mergedIdentities, null, 4));
