
export const products = [
    {
        id: 1,
        serialNumber: 1234,
        isNew: 1,
        photo: 'https://target.scene7.com/is/image/Target/AugWk3-0815-Computer_Monitors-01-SB-01-HD_Monitors-210812-1628785544552?wid=521&qlt=80&fmt=webp',
        title: 'Product 1',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33'
        },
        price: [
            {value: 100, symbol: 'USD', isDefault: 0},
            {value: 2600, symbol: 'UAH', isDefault: 1}
        ],
        order: 1,
        date: '2017-06-29 12:09:33'
    },
    {
        id: 2,
        serialNumber: 1234,
        isNew: 1,
        photo: 'https://target.scene7.com/is/image/Target/AugWk3-0815-Computer_Monitors-01-SB-01-HD_Monitors-210812-1628785544552?wid=521&qlt=80&fmt=webp',
        title: 'Product 2',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33'
        },
        price: [
            {value: 100, symbol: 'USD', isDefault: 0},
            {value: 2600, symbol: 'UAH', isDefault: 1}
        ],
        order: 2,
        date: '2017-06-29 12:09:33'
    },
]
export const orders = [
    {
        id: 1,
        title: 'Order 1',
        date: '2017-06-29 12:09:33',
        description: 'desc',
        products,
    },
    {
        id: 2,
        title: 'Order 2',
        date: '2017-06-29 12:09:33',
        description: 'desc',
        products,
    },
    {
        id: 3,
        title: 'Order 3',
        date: '2017-06-29 12:09:33',
        description: 'desc',
        products,
    }
]
