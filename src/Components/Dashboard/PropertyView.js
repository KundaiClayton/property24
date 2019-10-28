import React, { Component } from 'react'
import PropertyList from '../Properties/PropertyList'
import {connect} from 'react-redux'
import search from '../search/search'

const people=[
    {
        id:1,
    propertyName: "The Winston",
    AgentName:'John Doe'
},
{
    id:2,
    propertyName: "The Wimbledone",
    AgentName:'D Maria'
},
{
    id:3,
    propertyName: "Churchil",
    AgentName:'Ed Pfee'
}
]
function searchingFor(term){
    return function(x){
        return x.propertyName.toLowerCase().includes(term.toLowerCase())|| !term;
    }
}
class PropertyView extends Component{

    constructor(props){
        super(props);
        this.state={
            people:people,
            term:'',
        }
        this.searchHandler=this.searchHandler.bind(this);
    }
 
    searchHandler(event){
        this.setState({term: event.target.value})
    }
    render(){
        const {property}=this.props;
        return(
            
            <div className="dashboard container-fluid justify-content-center">
                <form >
                   <input input type="text" onChange={this.searchHandler}/>
                </form>
                    {
                        this.state.people.filter(searchingFor(this.state.term)).map(function(person){
                            return(
                                <div key={person.id}>
                                    <h2>{person.propertyName}</h2>
                                    <h>{person.AgentName}</h>
                                </div>
                            )
                        })
                    }
                <div className="row">
                    <div className="col-md-4">
                        <search/>
                        <PropertyList property={property}/>
                    </div>
                  
             
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
       property:state.property.properties
    }
}

export default connect(mapStateToProps)(PropertyView)