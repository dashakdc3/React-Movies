import React, { Component } from 'react';
// import React for React.createElement(is is done by itself)
class Counter extends Component {
    state = {
        count:0,
        imgUrl: "https://picsum.photos/200"
    };
    render(){ 
        let classes = "badge m-2 ";
        classes += (this.state.count ===0) ? "bg-warning text-darky" : "bg-primary";

        return (
            <React.Fragment>
                <img src={this.state.imgUrl} alt="" />
                <span style={{fontSize: 15}} className ={classes}>{this.formatCount()}</span> 
                <button className='btn btn-secondary btn-small'>Increment</button>
            </React.Fragment>);
    }

    formatCount(){
        const {count} = this.state;
        // {count: newvarforcount}
        return count === 0 ? 'Zero':count;
    }
}
 
export default Counter;


____________________________________________________________________________________________________________________________


import React, { Component } from 'react';
// import React for React.createElement(is is done by itself)
class Counter extends Component {
    state = {
        count:0,
        imgUrl: "https://picsum.photos/200",
        tags: ['tag1', 'tag2', 'tag3'],
    };
    render(){ 
        return (
            <React.Fragment>
                <img src={this.state.imgUrl} alt="" />
                <span style={{fontSize: 15}} className ={this.getBadgeClasses()}>{this.formatCount()}</span> 
                <button className='btn btn-secondary btn-small'>Increment</button>
                <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            </React.Fragment>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += (this.state.count === 0) ? "bg-warning text-darky" : "bg-primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        // {count: newvarforcount}
        return count === 0 ? 'Zero':count;
    }
}
 
export default Counter;

____________________________________________________________________________________________________________________________
// !!ConditionalRendering!!

import React, { Component } from 'react';
// import React for React.createElement(is is done by itself)
class Counter extends Component {
    state = {
        count:0,
        imgUrl: "https://picsum.photos/200",
        // tags: ['tag1', 'tag2', 'tag3'],
        tags: [],
    };
    renderTags(){
        if( this.state.tags.length === 0) return <p>There are no tags</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }
    render(){ 
        return (
            <React.Fragment>
                {this.state.tags.length === 0 && 'Please, create tags'}
                {this.renderTags()}
            </React.Fragment>);
    }

}

export default Counter;

____________________________________________________________________________________________________________________________

import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count:0,
        imgUrl: "https://picsum.photos/200",
        tags: ['tag1', 'tag2', 'tag3'],
    };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this)
    //     // this.handleIncrement = we reset handleIncrement() function to new
    //     // this.handleIncrement - we take this of increment
    //     // .bind(this) - bind method sets value of this, because in constuctor we have this.
    // }

    // handleIncrement(){
    //     console.log(this)
    // }

    handleIncrement = () => {
        this.setState({count: this.state.count +1})
    }
    render(){ 
        return (
            <React.Fragment>
                <img src={this.state.imgUrl} alt="" />
                <span style={{fontSize: 15}} className ={this.getBadgeClasses()}>{this.formatCount()}</span> 
                <button onClick={this.handleIncrement} className='btn btn-secondary btn-small'>Increment</button>
                <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            </React.Fragment>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += (this.state.count === 0) ? "bg-warning text-darky" : "bg-primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        // {count: newvarforcount}
        return count === 0 ? 'Zero':count;
    }
}
 
export default Counter;


____________________________________________________________________________________________________________________________
// Passing args
import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count:0,
        imgUrl: "https://picsum.photos/200",
        tags: ['tag1', 'tag2', 'tag3'],
    };
    handleIncrement = (product) => {
        console.log(product)
        this.setState({count: this.state.count +1})
    }
    render(){ 
        return (
            <React.Fragment>
                <img src={this.state.imgUrl} alt="" />
                <span style={{fontSize: 15}} className ={this.getBadgeClasses()}>{this.formatCount()}</span> 
                <button onClick={() => this.handleIncrement({id:1})} className='btn btn-secondary btn-small'>Increment</button>
                <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            </React.Fragment>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += (this.state.count === 0) ? "bg-warning text-darky" : "bg-primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        // {count: newvarforcount}
        return count === 0 ? 'Zero':count;
    }
}
 
export default Counter;
