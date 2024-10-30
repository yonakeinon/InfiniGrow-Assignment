
const mergeIdentities = require('../src/mergeIdentities');

test('merges identities based on shared account name, account ID, or email domain', () => {
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

    const result = mergeIdentities(identities);
    expect(result).toEqual([
        {
            account_name: ['bijihadina', 'infinigrow'],
            account_id: [233, 243],
            deal_id: [23],
            email: ['guy@infinigrow.com', 'dor@infinigrow.com', 'lee@gmail.com'],
            contact_id: [1, 2]
        }
    ]);
});
