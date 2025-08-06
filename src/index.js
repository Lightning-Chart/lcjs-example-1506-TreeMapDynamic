const lcjs = require('@lightningchart/lcjs')

const { lightningChart, Themes } = lcjs

const chart = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        }).TreeMapChart({
    legend: { visible: false },
    theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined,
})
chart.setTitle('Marketplace Product Segmentation')
chart.setCursorFormatting((_, hit) => {
    return [[{ text: hit.name, rowFillStyle: chart.getTheme().cursorResultTableHeaderBackgroundFillStyle }], [hit.value.toFixed(1)]]
})

const data = [
    {
        name: 'Electronics',
        children: [
            {
                name: 'Mobile Phones',
                children: [
                    {
                        name: 'Smartphones',
                        children: [
                            {
                                name: 'Android',
                                children: [
                                    { name: 'High-End', value: 10 },
                                    { name: 'Mid-Range', value: 10 },
                                    { name: 'Budget', value: 5 },
                                ],
                            },
                            {
                                name: 'iOS',
                                children: [
                                    { name: 'Latest', value: 15 },
                                    { name: 'Older Models', value: 10 },
                                ],
                            },
                        ],
                    },
                    { name: 'Feature Phones', value: 10 },
                ],
            },
            {
                name: 'Laptops',
                children: [
                    { name: 'Ultrabooks', value: 20 },
                    { name: 'Gaming Laptops', value: 10 },
                ],
            },
            {
                name: 'Cameras',
                children: [
                    { name: 'DSLR', value: 10 },
                    { name: 'Mirrorless', value: 5 },
                    { name: 'Point & Shoot', value: 5 },
                ],
            },
            {
                name: 'Television & Video',
                children: [
                    { name: 'LED TVs', value: 15 },
                    { name: 'Projectors', value: 10 },
                    { name: 'Streaming Devices', value: 5 },
                ],
            },
        ],
    },
    {
        name: 'Clothing',
        children: [
            {
                name: 'Men',
                children: [
                    { name: 'Shirts', value: 10 },
                    { name: 'Pants', value: 10 },
                    {
                        name: 'Accessories',
                        children: [
                            { name: 'Watches', value: 5 },
                            { name: 'Hats', value: 5 },
                        ],
                    },
                ],
            },
            {
                name: 'Women',
                children: [
                    { name: 'Dresses', value: 12 },
                    { name: 'Outerwear', value: 8 },
                    { name: 'Tops', value: 10 },
                    { name: 'Bottoms', value: 10 },
                ],
            },
            {
                name: 'Children',
                children: [
                    { name: 'Boys', value: 5 },
                    { name: 'Girls', value: 5 },
                    { name: 'Baby', value: 10 },
                ],
            },
        ],
    },
    {
        name: 'Home & Kitchen',
        children: [
            {
                name: 'Furniture',
                children: [
                    { name: 'Sofas', value: 10 },
                    { name: 'Chairs', value: 10 },
                    { name: 'Tables', value: 5 },
                ],
            },
            {
                name: 'Decor',
                children: [
                    { name: 'Vases', value: 5 },
                    { name: 'Wall Art', value: 5 },
                    { name: 'Ornaments', value: 5 },
                ],
            },
            {
                name: 'Kitchen Supplies',
                children: [
                    { name: 'Cookware', value: 10 },
                    { name: 'Appliances', value: 15 },
                    { name: 'Utensils', value: 5 },
                ],
            },
        ],
    },
    {
        name: 'Books',
        children: [
            {
                name: 'Fiction',
                children: [
                    { name: 'Fantasy', value: 5 },
                    { name: 'Sci-Fi', value: 5 },
                    { name: 'Mystery', value: 5 },
                ],
            },
            {
                name: 'Non-Fiction',
                children: [
                    { name: 'Biographies', value: 5 },
                    { name: 'Self-help', value: 5 },
                    { name: 'History', value: 5 },
                ],
            },
            {
                name: "Children's Books",
                children: [
                    { name: 'Storybooks', value: 5 },
                    { name: 'Learning', value: 5 },
                ],
            },
        ],
    },
    {
        name: 'Toys & Games',
        children: [
            {
                name: 'Toys',
                children: [
                    { name: 'Educational', value: 5 },
                    { name: 'Action Figures', value: 5 },
                    { name: 'Dolls', value: 5 },
                    { name: 'Building Sets', value: 5 },
                ],
            },
            {
                name: 'Games',
                children: [
                    { name: 'Board Games', value: 5 },
                    { name: 'Video Games', value: 10 },
                    { name: 'Puzzles', value: 5 },
                    { name: 'Card Games', value: 5 },
                ],
            },
        ],
    },
    {
        name: 'Health & Beauty',
        children: [
            {
                name: 'Personal Care',
                children: [
                    { name: 'Skincare', value: 10 },
                    { name: 'Haircare', value: 10 },
                    { name: 'Oral Care', value: 5 },
                ],
            },
            {
                name: 'Makeup',
                children: [
                    { name: 'Face', value: 5 },
                    { name: 'Eyes', value: 5 },
                    { name: 'Lips', value: 5 },
                ],
            },
            {
                name: 'Healthcare',
                children: [
                    { name: 'Supplements', value: 10 },
                    { name: 'Equipment', value: 5 },
                    { name: 'Medication', value: 5 },
                ],
            },
        ],
    },
    {
        name: 'Sports & Outdoors',
        children: [
            {
                name: 'Exercise & Fitness',
                children: [
                    { name: 'Cardio Equipment', value: 10 },
                    { name: 'Strength Training', value: 10 },
                    { name: 'Yoga', value: 5 },
                ],
            },
            {
                name: 'Outdoor Recreation',
                children: [
                    { name: 'Camping & Hiking', value: 10 },
                    { name: 'Cycling', value: 10 },
                    { name: 'Fishing', value: 5 },
                ],
            },
            {
                name: 'Team Sports',
                children: [
                    { name: 'Soccer', value: 5 },
                    { name: 'Basketball', value: 5 },
                    { name: 'Baseball', value: 5 },
                ],
            },
        ],
    },
]

chart.setData(data)
chart.setUserInteractions({ drillDown: undefined })

function randomizeValues(data) {
    data.forEach((item) => {
        if ('value' in item) {
            item.value *= 1.0 + 5 * Math.random()
        } else if ('children' in item) {
            randomizeValues(item.children)
        }
    })
}

setTimeout(() => {
    randomizeValues(data)
    chart.setData(data)
    setInterval(() => {
        randomizeValues(data)
        chart.setData(data)
    }, 5000)
}, 2000)
