import React from 'react'

class About extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:'this is a textarea'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        alert('submit is ' + this.state.value)
        event.preventDefault()
    }
    handleChange(event){
        this.setState({value:event.target.value})
    }
    render(){
        return(
            <form onSubmit= {this.handleSubmit}>
                <textarea value={this.state.value} onChange= {this.handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default About

