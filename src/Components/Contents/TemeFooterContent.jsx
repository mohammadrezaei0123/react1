
import React from 'react';


class TemeFooterContent extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        let styleImage = {
            width: "21px",
            height: "21px"
        }
        return (
            <dir className="container">
                <div className="row">
                    <div className="col-auto col-sm">
                        <p className="text-light">© 2019 Uber Technologies Inc.</p>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-column">
                            <div className="d-flex">
                                <a href="#" className="nav-link pl-0 text-light" href="#">Privacy Policy</a>
                                <a href="#" className="nav-link text-light" href="#">Terms of Use</a>
                                <a href="#" className="nav-link text-light" href="#">Pricing </a>
                            </div>
                            <div class="d-flex">
                                <a className="p-1" href="//www.facebook.com/ubereats">
                                    <img style={styleImage} src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ccfc8856107f17665b7c82df307d35ee.svg"/></a><a className="p-1" href="//www.twitter.com/ubereats"><img style={styleImage}  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/db07894edae0a7dde4b9f7477489eb3f.svg" /></a><a className="p-1" href="//www.instagram.com/ubereats"><img style={styleImage}  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/8c75d9d92274d2f1df48a02f35a7b1f0.svg" className="bw eq" /></a></div>
                        </div>



                    </div>
                </div>
            </dir>
        );
    }
}

export default TemeFooterContent;