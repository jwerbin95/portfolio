import React, { Component } from 'react';

import ProjectsGrid from '../Partials/ProjectsGrid'
import Footer from '../Partials/Footer'

export default class MainContainer extends Component{
	render(){
		return(
			<div class="ui fluid container">
				<header>
					<img src="/images/me.jpg" class="myPic ui small centered circular image" alt="Jacob Werbin"/>
					<div class="title">
						<div class="ui huge center aligned header">
							<span className="heading me">Jacob Werbin</span>
						</div>
					</div>
					<div className="contactHead">
						<span class="contact">Lakeway, TX</span>
						<span class="contact spacer">|</span>
						<span class="contact">jwerbin95@gmail.com</span>
					</div>
				</header>
				<div class="ui justified container">
					<h2 class="ui header"><span className="heading">About Me</span></h2>
						<p class="aboutMe">
							I’m a full-stack web developer experienced in object-oriented, database and markup languages with a passion for understanding how software functions. With a detailed computer science background I can quickly break down large projects into smaller, more manageable steps and give a clear explanation on how I got to my conclusion. I am most impactful in a team driven workspace where I can collaborate face-to-face with other people and bounce ideas off of others.
						</p>
				</div>
				<h2 class="ui centered dividing header"><span className="heading projects">Projects</span></h2>
				<ProjectsGrid />
				<Footer className="footer"/>
			</div>
		)
	}
}