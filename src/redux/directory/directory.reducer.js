const INITIAL_STATE = {
    sections: [
        {
            id: 1,
            title: 'Artwork',
            imageUrl: 'https://i.ibb.co/WHPKYWH/original-artwork.jpg',
            linkUrl: 'shop/artwork'
        },
        {
            id: 2,
            title: 'Prints',
            imageUrl: 'https://i.ibb.co/MSMRCqH/prints.jpg',
            linkUrl: 'shop/prints'
        },
        {
            id: 3,
            title: 'Cards',
            imageUrl: 'https://i.ibb.co/DLp16MQ/postcards.jpg',
            linkUrl: 'shop/cards'
        },
        {
            id: 4,
            title: 'Pins',
            size : 'large',
            imageUrl: 'https://i.ibb.co/HNywBjq/pins.jpg',
            linkUrl: 'shop/pins'
        },
        {
            id: 5,
            title: 'T-Shirts',
            size : 'large',
            imageUrl: 'https://i.ibb.co/LRLXDgp/tshirts.jpg',
            linkUrl: 'shop/tshirts'
        }
    ]
};

const directoryReducer =  (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default directoryReducer;
