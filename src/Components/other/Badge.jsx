
import  React  from 'react';


class BadgeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
          <div className="col d-felx flex-column">
          <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/dd89238d0aaaa2c9fd0e895ec501049b.svg" className="ar as at au av"/>
            <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/f39da638909566357729555024117e3f.svg" className="ar as aw au av"/>
  
          </div> );
    }
}
 
export default BadgeComponent;