
import  React  from 'react';


class BackSearchImages extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
        <div style={{
            position:"absolute",
            top:0,
            bottom:0,
            left:0,
            right:0,
            zIndex:0
        }}>
            <img style={{
            position:"absolute",
            top:0,
            left:0,right:0,bottom:0
            ,objectFit:"cover"
        }} src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/dd89238d0aaaa2c9fd0e895ec501049b.svg" 
        />
        <img style={{
            position:"absolute",

            left:0,right:0,bottom:0
            ,objectFit:"cover"
        }} src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/f39da638909566357729555024117e3f.svg" 
          />
        
      </div>);
    }
}
 
export default BackSearchImages;