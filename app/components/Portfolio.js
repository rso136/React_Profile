var React = require('react');
var Router = require('react-router');

var Portfolio = React.createClass({

	render: function() {

		return (

			<div className="portfolioContainer">
				<div className="row"><a name="portfolio"></a>
            		<div className="col-md-12" id="portTitle">
                <h3>MY PORTFOLIO SAMPLES</h3>
            	</div>
       		</div>
        <br></br>
        <div className="row">
            <div className="col-md-6">
                <div className="portHeading panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title"><b>NINTENDO HANGMAN</b></h3>
                    </div>
                    <div className="panel-body">
                        <a target="_blank" href="https://arcane-mountain-40771.herokuapp.com/"><img src="assets/images/nintendo.png" className="portImg img-rounded" height="150" width="250"></img></a>
                        <p>A retro game application showcasing native javascript.</p>
                        <a target="_blank" href="https://github.com/rso136/Hangman_Game"><p><b><u>Key Technologies:</u></b></p></a>
                        <ul>
                            <li>Javascript</li>
                            <li>UI: Bootstrap</li>
                        </ul>
                    </div>    
                </div>    
            </div>
            <div className="col-md-6">
                <div className="portHeading panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title"><b>SKYRIM ARENA</b></h3>
                    </div>
                    <div className="panel-body">
                        <a target="_blank" href="https://safe-basin-10956.herokuapp.com/"><img src="assets/images/skyrim.png" className="portImg img-rounded" height="150" width="250"></img></a>
                        <p>A javascript application based on the hit 2011 rpg that demonstrates fundamental jquery proficiency.</p>
                        <a target="_blank" href="https://github.com/rso136/Skyrim_Game"><p><b><u>Key Technologies:</u></b></p></a>
                        <ul>
                            <li>Jquery / Javascript</li>
                            <li>UI: Bootstrap</li>
                        </ul>
                    </div>    
                </div>
            </div>
        </div>    
            <div className="row">
                <div className="col-md-6">
                    <div className="portHeading panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title"><b>FRIENDWAY</b></h3>
                        </div>
                        <div className="panel-body">
                            <a target="_blank" href="https://quiet-ocean-92769.herokuapp.com/"><img src="assets/images/friends.png" className="portImg img-rounded" id="friendImg" height="150" width="250"></img></a>
                            <p>Friendway is a Node application utilizing the web framework Express.js. Demonstrates api routing in conjunction with jquery programming.</p>
                            <a target="_blank" href="https://github.com/rso136/Week13-FriendFinder"><p><b><u>Key Technologies:</u></b></p></a>
                            <ul>
                                <li>Node.js</li>
                                <li>Express.js</li>
                            </ul>
                        </div>    
                    </div>              
                </div>
                <div className="col-md-6">
                    <div className="portHeading panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title"><b>LIFE QUEST</b></h3>
                        </div>
                        <div className="panel-body">
                            <a target="_blank" href="https://rcblifequest.herokuapp.com/"><img src="assets/images/lifequest.png" className="portImg img-rounded" id="friendImg" height="150" width="250"></img></a>
                            <p>Life Quest is a full stack node application that integrates templating with Handlebars.js combined with MySQL database and lightweight ORM.</p>
                            <a target="_blank" href="https://github.com/salszu/goalKeeper"><p><b><u>Key Technologies:</u></b></p></a>
                            <ul>
                                <li>MySQL</li>
                                <li>Handlebars.js</li>
                            </ul>
                        </div>    
                    </div>              
                </div>        
            </div>
            <div className="row" id="bottomRow">
            <div className="col-md-6">
                <div className="portHeading panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title"><b>SOLVER</b></h3>
                        </div>
                        <div className="panel-body">
                             <a target="_blank" href="https://pure-sea-11701.herokuapp.com"><img src="assets/images/solver.png" className="portImg img-rounded" id="friendImg" height="150" width="250"></img></a>
                            <p>Solver is a robust full stack application encompassing email automation, data encryption, Sequelize ORM, cookie-based session, advanced jquery programming, and a sylistic design framework.</p>
                            <a target="_blank" href="https://github.com/rso136/Solver"><p><b><u>Key Technologies:</u></b></p></a>
                            <ul>
                                <li>MySQL/Sequelize</li>
                                <li>Express.js</li>
                            </ul>
                        </div>    
                    </div>          
                </div>
               <div className="col-md-6">
                <div className="portHeading panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title"><b>PORTFOLIO REDUX</b></h3>
                        </div>
                        <div className="panel-body">
                             <a target="_blank" href="https://fathomless-hamlet-75458.herokuapp.com"><img src="assets/images/react.png" className="portImg img-rounded" id="reactImg" height="150" width="250"></img></a>
                            <p>This is an alternate version of my portfolio page re-designed from the ground up utilizing the Javascript library, ReactJS. Demonstrates the essential features of this component based technology.</p>
                            <a target="_blank" href="https://github.com/rso136/React_Profile"><p><b><u>Key Technologies:</u></b></p></a>
                            <ul>
                                <li>ReactJS</li>
                                <li>UI: Bootstrap</li>
                            </ul>
                        </div>    
                    </div>          
                </div>  


            </div>   
</div>


		)

	}
})

module.exports = Portfolio;