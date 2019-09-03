
import React from 'react';
class ServiceContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div class="container py-3 border-bottom">
                <div className="row">
                <div className="col-12 col-sm-12 col-md-4 p-1">
                        <figure>
                            <img
                            src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/816084874de4267a8e89c881db968ed2.svg"
                            className="ar cq f1" />
                        </figure>
                    <h3 className="h3 pb-1">There's more to love in the app.</h3>
                    <div className="d-flex align-items-center">
                        <div className="">Get the app:</div>
                        <div className="bo bp bt bu bv">
                        </div>
                            <div className="ba bb d-flex px-2" >
                                <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/69d77b8f17b59cfdbf13b6037870b080.svg"
                                className="bw ez" />
                                <div className="bo bs bt bu bv"></div>
                                <div className="pl-1">iPhone</div>
                            </div>
                        <div className="bo bp bt bu bv"></div>
                        <div className="ba bb d-flex px-2">
                            <img
                                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/b40e273112fe1592601991dc10921970.svg"
                                className="bw" />
                                <div className="bo bs bt bu bv"></div>
                                <div className="pl-1">Android</div>
                            </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 p-1">
                    <div className="dg">
                        <figure className="cc af dh"><img
                            src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/bd4c2537aa3799e345a397e7e4c9cbac.svg"
                            className="ar cq f1" /></figure>
                    </div>
                    <p className="h3">Your restaurant, delivered</p>
                    <a href="https://www.ubereats.com/restaurant/"
                      style={{
                        padding:0
                     }}    className="nav-link text-dark">Add your restaurant</a>
                </div>
                <div className="col-12 col-sm-6 col-md-4 p-1">
                    <div className="dg">
                        <figure className="cc af dh"><img
                            src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/b96045d2e2b2989e7b09200b1c40ab73.svg"
                            className="ar cq f1" /></figure>
                    </div>
                    <h3 className="h3">Deliver the Eats</h3><a href="https://www.uber.com/drive/delivery/"
                      style={{
                          padding:0
                       }}  className="nav-link text-dark">Sign up to deliver</a>
                </div>
            </div>
            </div>
            );
    }
}

export default ServiceContent;