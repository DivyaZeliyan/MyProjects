import React from 'react';
import axios from 'axios'
class OpenWeatherMap extends React.Component{
    constructor(props){
       super(props)
        this.state={
            data:[],
            search:""
 }
    }
callWeatherMapApi(ip){
     axios.get("https://api.openweathermap.org/data/2.5/weather?&appid=4686881932da34760b05ad196cf12aed&q="+ip).then((res)=>console.log(res)).catch((err)=>console.log(err))
}
handleSubmit=(e)=>{
   e.preventdefault();
    this.callWeatherMapApi(this.state.search)
}
setSearch=(event)=>{
    this.setState({search:event.target.value})
}
    render(){
        return(
            <div>
               <h1>Check Current Weather</h1>
                <form>
                <input type="text" placeholder='Enter your city' onChange={this.setSearch}></input>
                <button onClick={this.handleSubmit}>Submit</button>
                </form>
                {this.state.data.map((item)=>console.log(item))} 
           </div>
        )
    }
}
export default OpenWeatherMap