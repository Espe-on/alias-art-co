const INITIAL_STATE = {
    sections: [
        {
            id: 1,
            title: 'Artwork',
            imageUrl: 'https://i.ibb.co/WHPKYWH/original-artwork.jpg',
            linkUrl: 'artwork'
        },
        {
            id: 2,
            title: 'Prints',
            imageUrl: 'https://i.ibb.co/MSMRCqH/prints.jpg',
            linkUrl: 'prints'
        },
        {
            id: 3,
            title: 'Cards',
            imageUrl: 'https://i.ibb.co/DLp16MQ/postcards.jpg',
            linkUrl: 'cards'
        },
        {
            id: 4,
            title: 'Pins',
            size : 'large',
            imageUrl: 'https://i.ibb.co/HNywBjq/pins.jpg',
            linkUrl: 'pins'
        },
        {
            id: 5,
            title: 'T-Shirts',
            size : 'large',
            imageUrl: 'https://i.ibb.co/LRLXDgp/tshirts.jpg',
            linkUrl: 'tshirts'
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
