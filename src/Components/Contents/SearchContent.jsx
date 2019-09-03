
import React from 'react';
import BackSearchImages from '../other/BackSearchImages';
import InputSearch from '../other/InputSearch';

class SearchContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div 
        className="d-felx flex-column justify-content-center align-items-center w-100"
        style={{
            height:"480px",
            position:"relative",
            background:"#ff8080"
        }}>
            
       <BackSearchImages></BackSearchImages>
            <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100" 
            
            >
                <h3 className="h3 text-center" style={{
                zIndex:50
            }}>Restaurants you love, delivered to <br/>you</h3>
        <InputSearch backColor={"#f7f7f7"} id="inside-menu" cStyle={{
            width : "50%",
            zIndex:50
        }}
        ></InputSearch>
        </div>
            

        </div> 
        );
    }
}
 
export default SearchContent;