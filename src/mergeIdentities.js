
// Helper function to extract the domain from an email
function getEmailDomain(email) {
    return email && email.includes('@') ? email.split('@')[1] : null;
}

// Main function to merge identities based on any shared entities or email domain
function mergeIdentities(identities) {
    if (!Array.isArray(identities)) {
        throw new Error('Invalid input: identities should be an array');
    }

    const mergedIdentities = [];

    identities.forEach(identity => {
        let matchedGroup = null;
        const emailDomain = getEmailDomain(identity.email);

        // Check each existing group for any shared entity or matching email domain
        for (const group of mergedIdentities) {
            if (
                (identity.account_name && group.account_name.includes(identity.account_name)) ||
                (identity.account_id && group.account_id.includes(identity.account_id)) ||
                (identity.deal_id && group.deal_id.includes(identity.deal_id)) ||
                (identity.email && group.email.includes(identity.email)) ||
                (emailDomain && group.email.some(e => getEmailDomain(e) === emailDomain))
            ) {
                matchedGroup = group;
                break;
            }
        }

        // If a matching group was found, merge this identity into that group
        if (matchedGroup) {
            if (identity.account_name && !matchedGroup.account_name.includes(identity.account_name)) {
                matchedGroup.account_name.push(identity.account_name);
            }
            if (identity.account_id && !matchedGroup.account_id.includes(identity.account_id)) {
                matchedGroup.account_id.push(identity.account_id);
            }
            if (identity.deal_id && !matchedGroup.deal_id.includes(identity.deal_id)) {
                matchedGroup.deal_id.push(identity.deal_id);
            }
            if (identity.email && !matchedGroup.email.includes(identity.email)) {
                matchedGroup.email.push(identity.email);
            }
            if (identity.contact_id && !matchedGroup.contact_id.includes(identity.contact_id)) {
                matchedGroup.contact_id.push(identity.contact_id);
            }
        } else {
            // If no matching group, create a new group for this identity
            mergedIdentities.push({
                account_name: identity.account_name ? [identity.account_name] : [],
                account_id: identity.account_id ? [identity.account_id] : [],
                deal_id: identity.deal_id ? [identity.deal_id] : [],
                email: identity.email ? [identity.email] : [],
                contact_id: identity.contact_id ? [identity.contact_id] : []
            });
        }
    });

    return mergedIdentities;
}

module.exports = mergeIdentities;
