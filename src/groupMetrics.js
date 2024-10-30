// Utility function to deeply sort object keys for consistent comparison
function deepSort(obj) {
    if (Array.isArray(obj)) {
        return obj.map(deepSort);
    } else if (obj !== null && typeof obj === 'object') {
        const sortedObj = {};
        Object.keys(obj).sort().forEach(key => {
            sortedObj[key] = deepSort(obj[key]);
        });
        return sortedObj;
    } else {
        return obj;
    }
}

// Function to create a hash for objects
function hashObject(obj) {
    let hash = 0;
    const stringified = JSON.stringify(deepSort(obj));
    for (let i = 0; i < stringified.length; i++) {
        const char = stringified.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0;
    }
    return hash;
}

// Function to serialize filters using hashing
function serializeFilters(filters) {
    try {
        return hashObject(filters).toString();
    } catch (error) {
        console.error('Error serializing filters:', error);
        throw new Error('Failed to serialize filters');
    }
}

// Main function to group metrics by identical filters
function groupMetricsByFilters(metricsWithFilters) {
    try {
        if (!metricsWithFilters || typeof metricsWithFilters !== 'object') {
            throw new Error('Invalid input: data should be a non-null object');
        }

        const groupedMetrics = [];
        const filterMap = new Map();

        for (const [metricName, filters] of Object.entries(metricsWithFilters)) {
            if (!Array.isArray(filters)) {
                console.warn(`Skipping metric "${metricName}" due to invalid filters format`);
                continue;
            }

            const filterKey = serializeFilters(filters);

            if (filterMap.has(filterKey)) {
                filterMap.get(filterKey).metrics.push(metricName);
            } else {
                filterMap.set(filterKey, { metrics: [metricName], filters });
            }
        }

        for (const group of filterMap.values()) {
            groupedMetrics.push(group);
        }

        return groupedMetrics;
    } catch (error) {
        console.error('Error grouping metrics by filters:', error);
        throw new Error('Failed to group metrics by filters');
    }
}

module.exports = groupMetricsByFilters;
