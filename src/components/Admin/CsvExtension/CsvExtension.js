import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ViewLatestCsv from './ViewLatestCsv';

class CsvExtension extends Component {

    addCsv = ()=> {
        console.log('add csv');
    }

    render() {
        return (
            <div>
                <Button id="submitCsv">
                <input 
                    id="myFile" 
                    type="file" 
                    onChange={this.addCsv}
                    accept=".csv" 
                />
                </Button>
                <br></br>
                <ViewLatestCsv />
            </div>
        );
    }
}

export default CsvExtension;
