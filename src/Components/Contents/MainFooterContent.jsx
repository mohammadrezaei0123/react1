
import React from 'react';


class MainFooterContent extends React.Component {
    componentDidMount() {

    }
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <dir className="container border-bottom py-2">
                <div className="row">
                    <div className="col">
                        <div className="d-flex flex-column h-100">
                            <p><img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/12c47a69e1022b581a7e823e9bd45466.svg" /></p>
                            <div className="mt-auto">
                                <p>
                                    <img style={{
                                        height: "40px"
                                    }} src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d0558d91063038236b60e3ef71fdc1fd.svg" />
                                    <img style={{
                                        height: "40px"
                                    }} src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cf6dad406fdfdcd290fd40de9008ae50.png" />
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="col d-flex flex-column">
                        <a href="#" className="text-light nav-livk" >About Uber Eats</a>
                        <a href="#" className="text-light nav-livk" >Read our blog</a>
                        <a href="#" className="text-light nav-livk" >Buy gift cards</a>
                        <a href="#" className="text-light nav-livk" >Sign up to deliver</a>
                        <a href="#" className="text-light nav-livk" >Add your restaurant</a>
                        <a href="#" className="text-light nav-livk" >Get Help</a>
                        <a href="#" className="text-light nav-livk" >Read FAQs</a>
                        <a href="#" className="text-light nav-livk" >View all cities</a>
                        <a href="#" className="text-light nav-livk d-felx justify-content-center align-items-center" >
                            <img style={{
                            height: "30px",
                            width: "30px"
                        }} src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/2601cb43facfcd27a8d88d727dce9bb5.svg" className="pr-2" />English</a>
                    </div>
                </div>
            </dir>
        );
    }
}

export default MainFooterContent;