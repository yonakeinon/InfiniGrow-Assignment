const groupMetricsByFilters = require('../src/groupMetrics');

test('groups metrics with identical filters', () => {
    const input = {
        metric1: [{ kind: 'custom', data: { variant: 0, selectedOptions: ['A'] } }],
        metric2: [{ kind: 'custom', data: { variant: 0, selectedOptions: ['A'] } }],
    };
    const output = groupMetricsByFilters(input);
    expect(output).toEqual([
        { metrics: ['metric1', 'metric2'], filters: [{ kind: 'custom', data: { variant: 0, selectedOptions: ['A'] } }] }
    ]);
});
