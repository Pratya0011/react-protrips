
import data from '../data.json';
import '../components/home.css'
import React, { Component } from 'react'

export default class Home extends Component {
    trekCount=()=>{
        var count = 0;
        for(var i=0;i<data.length;i++){
            if(data[i].type === 'Trek'){
                count++;
            }
        }
        return count;
    }
    clubCount=()=>{
        var count = 0;
        for(var i=0;i<data.length;i++){
            if(data[i].type === 'Club'){
                count++;
            }
        }
        return count;
    }
    trophieCount=()=>{
        var count = 0;
        for(var i=0;i<data.length;i++){
            if(data[i].type === 'Trophie'){
                count++;
            }
        }
        return count;
    }
    render() { 
        return ( 
            <>
            <div className='home'>
            <div className='trips'><span>{data.length}</span>trips</div>
            <div className='homelist'>
            <div><span>{this.trekCount()}</span>treks</div>
            <div><span>{this.clubCount()}</span>clubs</div>
            <div><span>{this.trophieCount()}</span>trophies</div>
            </div>
            </div>
            </>
         );
    }
}
