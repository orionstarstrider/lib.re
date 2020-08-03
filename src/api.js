import React from 'react';

const booksModel = {
    fields: [
        {
            name: 'id',
            title: 'ID',
            required: false,
            inputType: 'number',
            display: false
        },
        {
            name: 'title',
            title: 'Title',
            required: true,
            inputType: 'text',
            display: true
        },
        {
            name: 'author',
            title: 'Author',
            required: true,
            inputType: 'text',
            display: true
        },
        {
            name: 'price',
            title: 'Price',
            required: false,
            inputType: 'number',
            display: true,
            formatValue(value) {
                let formattedPrice = value.toString().replace(/\s/g, '')
                let rubles = '0'
                let kopeykas
            
                if (formattedPrice.includes('.')) {
                    let separatedPrice = formattedPrice.split('.')
            
                    rubles = separatedPrice[0]
                    kopeykas = separatedPrice[1]
                } else {
                    rubles = formattedPrice
                }
            
                if (rubles.length > 3) {
                    let hundreds = rubles.slice(-3)
                    let thousands = rubles.slice(0, -3)
            
                    rubles = `${thousands} ${hundreds}`
                }
            
                if (kopeykas && kopeykas.length === 1) {
                    kopeykas += '0'
                }
            
                return <>{`${rubles}${kopeykas ? `.${kopeykas}` : ''}`}&nbsp;₽</>
            }
        },
        {
            name: 'published',
            title: 'Published',
            required: false,
            inputType: 'date',
            display: true,
            formatValue(value) {
                const getFullMonth = index => {
                    switch (index) {
                        case 0:
                            return 'January'
                        case 1:
                            return 'February'
                        case 2:
                            return 'March'
                        case 3:
                            return 'April'
                        case 4:
                            return 'May'
                        case 5:
                            return 'June'
                        case 6:
                            return 'July'
                        case 7:
                            return 'August'
                        case 8:
                            return 'September'
                        case 9:
                            return 'Oktober'
                        case 10:
                            return 'November'
                        case 11:
                            return 'December'
                        default:
                            return 'Unknown'
                    }
                }

                const date = new Date(value)
                const day = `${date.getDate()}`.padStart(2, '0')
                const year = date.getFullYear()
                const month = getFullMonth(date.getMonth());

                return <>{day}&nbsp;{month}&nbsp;{year}</>
            }
        },
        {
            name: 'inStock',
            title: 'Status',
            required: true,
            inputType: 'checkbox',
            display: true,
            formatValue(value) {
                return value
                    ? <span className="status in_stock">In stock</span>
                    : <span className="status out_of_stock">Out of stock</span>
            }
        },
    ]
}

export const url = '/books.json'

export default booksModel