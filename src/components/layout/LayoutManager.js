import React from 'react';

import Layout from './Layout';

class LayoutManager extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 'hours'
        }

        console.log('here')
        this.handleTimeSelection = this.handleTimeSelection.bind(this);
    }

    handleTimeSelection (value) {
        console.log('NEW DSDDSDSFDFDF '+value);
        this.setState({
            value: value
        })
    }
   

    render(){
        console.log(' 1. value in layout-manager is : '+this.state.value);
        
        return(
           <div>
                <Layout value={this.state.value} onClick={this.handleTimeSelection} passedFunction={'bla'}/>
           </div>
        )
    }
}

export default LayoutManager; 