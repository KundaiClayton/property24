import React ,{Component} from 'react'

class search extends Component{

    constructor(props){
        super(props);
        this.state={
            query:'',
            results:{},
            loading:false,
            message:''
        }
    }
    render(){
        return(
            <div className="container">
              {/*heading*/}
              <h2 className="heading">Live Search: React App</h2>
              {/*search input*/}
              <label htmlFor="" className="search-label" htmlFor="search-input"></label>
              <input type="text" value="" id="search-input" placeholder="S"/>
            </div>
        )
    }
}
export default search;