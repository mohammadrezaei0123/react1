
import React from 'react';
import loadImage from '../../assets/img/loadImage.jpg'

class PopularContent extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        let data = [
            {
                src: "https://image.opeqe.com/gallery/small/8.jpg",
                text: "American"
            },
            {
                src: "https://image.opeqe.com/gallery/small/8.jpg",
                text: "Burgers"
            },
            {
                src: "https://image.opeqe.com/gallery/small/8.jpg",
                text: "Desserts"
            },
            {
                src: "https://image.opeqe.com/gallery/small/8.jpg",
                text: "Fast Food"
            },
            {
                src: "https://image.opeqe.com/gallery/small/8.jpg",
                text: "Mexican"
            },
            {
                src: "https://image.opeqe.com/gallery/small/8.jpg",
                text: "Pizza"
            }


        ]
        return (
            <div className="container py-2">
                <div className="row pr-auto">
                    <div className="col d-flex w-100">
                        <h3 className="h3 mr-auto">Explore Popular Categories</h3>
                    </div>
                </div>
                <div className="row ">
                    {data.map((v, k) => {
                        return <div className="col-6 col-sm-3 col-md-2" key={k}>
                            <div className="d-flex flex-column justify-content-center align-items-center">

                                <div style={{
                                    backgroundImage: `url('${v.src}'), url('${loadImage}')`,
                                    paddingTop: "100%",
                                    backgroundSize: "cover"
                                }} className="card-img-top w-100 rounded-circle"></div>
                                <div className="text-center text-secondary h5">{v.text}</div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default PopularContent;