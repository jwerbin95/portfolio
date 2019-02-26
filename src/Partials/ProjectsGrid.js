import React, { Component } from 'react';

export default class ProjectsGrid extends Component{
	render(){
		return(
			<div className="ui three cards">
				<div className="ui raised card">
					<div className="ui fade reveal">
						<div className="visible content">
							<img src="/images/tetris.png" className="ui image" alt="tetris"/>
						</div>
						<div clas="hidden content">
							<img src="/images/tetris.gif" className="ui image" alt="tetris"/>
						</div>
					</div>
					<div className="content">
						<div className="header">Tetris</div>
						<div className="description">
							Tetris built using HTML5 canvas and Javascript.
						</div>
					</div>
					<a className="ui button" href="projects/Game_Project/index.html">Check It Out!</a>
				</div>
				<div className="ui raised card">
					<div className="ui fade reveal">
						<div className="visible content">
							<img src="/images/ecommerce.png" className="ui image" alt="tetris"/>
						</div>
						<div clas="hidden content">
							<img src="/images/ecommerce.gif" className="ui image" alt="tetris"/>
						</div>
					</div>
					<div className="content">
						<div className="header">E-Commerce Example Website</div>
						<div className="description">
							E-Commerce website built using Bootstrap and Javascript.
						</div>
					</div>
					<a className="ui button" href="/projects/E-Commerce/index.html">Check It Out!</a>
				</div>
				<div className="ui raised card">
					<div className="ui fade reveal">
						<div className="visible content">
							<img src="/images/spaceGame.png" className="ui image" alt="tetris"/>
						</div>
						<div clas="hidden content">
							<img src="/images/spaceGame.gif" className="ui image" alt="tetris"/>
						</div>
					</div>
					<div className="content">
						<div className="header">Space Game</div>
						<div className="description">
							A turn-based space game built using JQuery and Javascript.
						</div>
					</div>
					<a className="ui button" href="/projects/Space_Game/spacebattle/index.html">Check It Out!</a>
				</div>
				<div className="ui raised card">
					<div className="ui fade reveal">
						<div className="visible content">
							<img src="/images/sorting.png" className="ui image" alt="tetris"/>
						</div>
						<div clas="hidden content">
							<img src="/images/sorting.gif" className="ui image" alt="tetris"/>
						</div>
					</div>
					<div className="content">
						<div className="header">Sorting Visualized</div>
						<div className="description">
							Graphic visualization of the efficency of sorting algorithms buildt using HTML5 Canvas and Javascript.
						</div>
					</div>
					<a className="ui button" href="/projects/sortingProject/index.html">Check It Out!</a>
				</div>
				<div className="ui raised card">
					<div className="ui fade reveal">
						<div className="visible content">
							<img src="/images/geoquake.png" className="ui image" alt="tetris"/>
						</div>
						<div clas="hidden content">
							<img src="/images/geoquake.gif" className="ui image" alt="tetris"/>
						</div>
					</div>
					<div className="content">
						<div className="header">Geometric Activity Monitor</div>
						<div className="description">
							React based site to monitor location, magnitude, time, of recent earthquakes around the globe. Uses Google Maps API and earthquake.gov's API.
						</div>
					</div>
				</div>
				<div className="ui raised card">
					<img src="/images/placeholder.png" className="ui image" alt="coming soon" />
					<div className="content">
						<div className="header">Coming soon...</div>
						<div className="description">
							Current Project
						</div>
					</div>
				</div>
			</div>
		)
	}
}
