import React,{ Component } from "react";

//Handling events in react has 2 steps:
//1. declaring a event handler
//2. send that event to the resp element

//State : 
// 1. is a plain javascript object which is used to record and react user events, each class based 
// component has its own state object. Whenever component's state is changed, the component immediately
// re-renders and also forces all of its children to re-render as well.
// initalize state object
// All javascript class based components has special thing cald constructor, it is the only function
// cald automatically whenevr a new instance of the class is created.

class SearchBar extends Component{
    constructor(props){
        super(props); // it is must

        this.state = {term : '' };
    }
    render() {
        return (
            <div className = "search-bar">
                <input 
                    value = {this.state.term}
                    onChange = {event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
    onInputChange(term){
        this.setState({term : term});
        this.props.onSearchTermChange(term);
    }
    // handleInputChange(event) {
    //     console.log(event.target.value);
    // }
}

export default SearchBar;
