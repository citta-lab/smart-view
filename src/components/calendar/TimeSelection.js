import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class TimeSelection extends React.Component{
    constructor(props){
        super(props);
       
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.props.onClick(e.target.value);
    }

    render(){
        return(
           <div className="radio-group">
                <RadioGroup aria-label="position" name="position" value={this.props.value} onChange={this.handleChange} row>
                <FormControlLabel
                    value="hours"
                    control={<Radio color="primary" />}
                    label="By Hours"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="days"
                    control={<Radio color="primary" />}
                    label="By Days"
                    labelPlacement="start"
                />
            </RadioGroup>
           </div>
        )
    }
}

export default TimeSelection;