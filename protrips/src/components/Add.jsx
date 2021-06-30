import React, { Component } from 'react';
import '../components/add.css'
import data from '../data.json';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {   
            date:'',
            place:'',
            type:''
        }
    }
            
    
    renderDate=(e)=>{
        this.setState({date:e.target.value});
    }
    renderPlace=(e)=>{
        this.setState({place:e.target.value});
    }
    renderType=(e)=>{
        this.setState({type:e.target.value});
    }
    submitButton=()=>{
         alert('submitted');
         data.push(this.state)
    }
    render() { 
        return ( 
            <>
            <div className="add">
                <h1>Add a trip</h1>
                <div className="add">
                        <label>Date:</label>
                        <input type='date' onChange={this.renderDate}></input>
                        <label>Place:</label>
                        <input type='text' onChange={this.renderPlace}></input>
                        <label>Type:</label>
                        <select onClick={this.renderType}>
                            <option value="Trek">Trek</option>
                            <option value="Club">Club</option>
                            <option value="Trophie">Trophie</option>
                        </select>
                        <button type='submit' onClick={this.submitButton}>Submit</button>
                </div>
            </div>
            
            
            </>
         );
    }
}
 
export default Add;