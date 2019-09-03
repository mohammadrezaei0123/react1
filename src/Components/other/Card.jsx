
import  React  from 'react';
import PropTypes from 'prop-types';
import loadImage from '../../assets/img/loadImage.jpg'
class CardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          imageStatus: "loading",
          isLoading:true
         }
         this.typeFood = this.typeFood.bind(this);
         this.fixedPriceLength = this.fixedPriceLength.bind(this);
         this.imageRef=React.createRef()
    }
    // componentDidMount(){
    //   this.imageRef.classList.add("animation-load")
    // }
    
    fixedPriceLength(price){

    }
    typeFood(){
      let cuisineType=(this.props.menu.cuisineType&&this.props.menu.cuisineType.title && 
        this.props.menu.cuisineType.title.trim().length>0)?
        `• ${this.props.menu.cuisineType&&this.props.menu.cuisineType.title} `:''
      let mealType=(this.props.menu.mealType&&this.props.menu.mealType.title && 
        this.props.menu.mealType.title.trim().length>0)?
        `• ${this.props.menu.mealType.title} `:''
      let menuType=(this.props.menu.menuType&&
        this.props.menu.menuType.title && 
        this.props.menu.menuType.title.trim().length>0)?
        `• ${this.props.menu.menuType.title} `:''

      return <p>
        $ {cuisineType}{mealType}{menuType}
      </p>
  }
    render() { 
     let imageStyle = {
        backgroundImage: `url('${this.props.menu.image}'), url('${loadImage}')`,
        paddingTop:"100%",   
  backgroundSize: "cover"
      }
        return ( 
            <div className="card w-100 p-1" 
            >
  <div style={imageStyle} className="card-img-top w-100"></div>

  <h5 className="card-title h5">{this.props.menu.title&&
  <>{this.props.menu.title}</>
  }</h5>
  <div className="card-title p">{this.props.menu.subTitle}</div>

  <div className="text-muted mt-auto">{this.typeFood()}</div>
  <p className="pb-2"><a href="#" class="badge text-secondary badge-light">$ {this.props.menu.price} Price</a>
</p>
 </div>
         );
    }
}
CardComponent.defaultProps = {
  menu: {},
}

CardComponent.propTypes = {
  menu: PropTypes.object.isRequired,
}
export default CardComponent;