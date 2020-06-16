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
                    imageUrl: 'https://i.ibb.co/WHPKYWH/original-artwork.jpg'
                },
                {
                    id: 2,
                    title: 'Prints',
                    imageUrl: 'https://i.ibb.co/MSMRCqH/prints.jpg'
                },
                {
                    id: 3,
                    title: 'Cards',
                    imageUrl: 'https://i.ibb.co/DLp16MQ/postcards.jpg'
                },
                {
                    id: 4,
                    title: 'Pins',
                    size : 'large',
                    imageUrl: 'https://i.ibb.co/HNywBjq/pins.jpg'
                },
                {
                    id: 5,
                    title: 'T-Shirts',
                    size : 'large',
                    imageUrl: 'https://i.ibb.co/LRLXDgp/tshirts.jpg'
                }
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, title, size, imageUrl}) => (
                        <MenuItem key={id}
                                  title={title}
                                  size={size}
                                  imageUrl={imageUrl}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;
