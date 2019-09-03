
import React from 'react';
import CardComponent from '../other/Card';
import PropTypes from 'prop-types';


class CardContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startNode: 0,
            nextEnable:false,
            prvEnable:true
        };
        this.nodeMenu = this.nodeMenu.bind(this)
        this.nextFoods = this.nextFoods.bind(this);
        this.prvFoods = this.prvFoods.bind(this)

    }
    nextFoods() {
        if(this.state.startNode+this.props.countNode<this.props.menus.length){
            this.setState((state,props)=>({
                startNode:state.startNode+this.props.countNode,
                nextEnable:((state.startNode+(2*props.countNode))>props.menus.length),
                prvEnable:!((state.startNode)>=0)
            }))
        }
    }
    prvFoods() {
        if(this.state.startNode-this.props.countNode>=0){
            this.setState((state,props)=>({
                startNode:state.startNode-this.props.countNode,
                nextEnable:((state.startNode)>props.menus.length),
                prvEnable:!((state.startNode-(2*props.countNode))>=0)
            }))
        }
    }
    nodeMenu() {
        if (this.state.startNode < this.props.menus.length) {
            let menu = []
            for (let index = this.state.startNode; index < this.props.menus.length && this.state.startNode + this.props.countNode > index; index++) {
                menu.push(<div className="col  d-flex align-self-stretch" key={this.props.menus[index].id}>
                    <CardComponent menu={this.props.menus[index]}></CardComponent>
                </div>)
            }
            for (let index = menu.length; index < this.props.countNode; index++) {
                menu.push(<div className="col  d-flex align-self-stretch" key={index+"ssssssssssssd"}>
            </div>)
                
            }
            return menu
        } else {
            return [<></>]
        }
    }
    render() {
        let showMenu = this.nodeMenu()
        if (this.props.menus.length == 0) {
            return <></>
        } else {
            return (
                <div className="container border-bottom py-3">
                    <div className="row p-2">
                        <div className="col">
                            <h3 className="h3">Food Delivery in San Francisco Bay Area</h3>
                        </div>
                        <div className="col-auto ml-auto">
                            <button type="button" class="btn btn-light" 
                            disabled={this.state.prvEnable}
                            onClick={this.prvFoods}
                            >
                                <svg id="i-arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <path d="M10 6 L2 16 10 26 M2 16 L30 16" />
                                </svg>
                            </button>
                            <button type="button" class="btn btn-light"
                            disabled={this.state.nextEnable}
                            onClick={this.nextFoods}
                            >
                                <svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <path d="M22 6 L30 16 22 26 M30 16 L2 16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="row">
                            {showMenu}
                        
                    </div>

                </div>
            );
        }
    }
}

CardContent.defaultProps = {
    menus: [],
    countNode:3
}

CardContent.propTypes = {
    menus: PropTypes.array.isRequired,
    countNode:PropTypes.number.isRequired
}
export default CardContent;