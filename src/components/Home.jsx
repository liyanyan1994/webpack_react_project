import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {date:new Date()}
    }
   
    componentDidMount(){
        console.log('componentsDidMount')
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
        clearInterval(this.timerID)
    }
    tick(){
        this.setState({
            date:new Date()
        })
    }
    render(){
        return (
            <div>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
                <p> Today is time</p>
            </div>
        );
    }
}

export default Home
