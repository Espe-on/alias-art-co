import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss"

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
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
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;
