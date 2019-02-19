import React, { Component } from 'react';

export default class Footer extends Component{
	render(){
		return(
			<div className="ui inverted segment">
				<div className="ui inverted secondary menu">
					<a className="item" src="/home">Home</a>
					<a className="item" href="https://github.com/jwerbin95">Github</a>
					<a className="item" href="https://linkedin.com/in/jacobwerbin">LinkedIn</a>
					<a className="right item" href="mailto:jwerbin95@gmail.com">Email Me</a>
				</div>
			</div>
		)
	}
}