import React from 'react';

import Layout from './Layout';

class LayoutManager extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 'hours'
        }

        this.handleTimeSelection = this.handleTimeSelection.bind(this);
    }

    handleTimeSelection (value) {
        this.setState({
            value: value
        })
    }
   
    render(){ 
        return(
           <div>
                <Layout value={this.state.value} onClick={this.handleTimeSelection} />
           </div>
        )
    }
}

export default LayoutManager; 