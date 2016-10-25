var React = require('react');
var Router = require('react-router');

var Bio = React.createClass({

	render: function() {

		return (
			
			<div className = "row">
				<div className="col-md-12" id="bioBox">
					<div id="bioHeading">
						<h3>ABOUT</h3>
					</div>
					<div id="about">
					  <img src="assets/images/profileImg.jpg" className="img-rounded" id="profilePic" height="150" width="150"></img>	
					  <p>My <a href="Richard_Oh_Resume.pdf"><u>background</u></a> is rather diverse having studied English Literature in college and then biblical studies for graduate school. I am now a web developer with full stack experience in a variety of technologies. I consider myself a lifelong learner and have enjoyed the variety of experiences I have walked through in life. I hope to have the opportunity to share my skills and ideas with you.</p>	

					</div>
				</div>	
			</div>	

		)
	}	
})

module.exports = Bio;