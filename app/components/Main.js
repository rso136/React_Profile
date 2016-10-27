var React = require('react');
var Router = require('react-router')

var Main = React.createClass({

	render: function() {

		return(

			<div className="main-container">
				<nav className="navbar navbar-custom navbar-fixed-top">
       				<div className="container-fluid">
            			<ul className="list-unstyled">
                            <li className="navbar-text navbar-right" id="menuItem1">
                            <h4><a href="#/contact" className="navbar-link">Contact</a></h4></li>
                			<li className="navbar-text navbar-right" id="menuItem2">
                    		<h4><a href="#/bio" className="navbar-link">About</a></h4></li>
               		 		<li className="navbar-text navbar-right" id="menuItem3">
                    		<h4><a href="#/portfolio" className="navbar-link">Portfolio</a></h4></li>

            			</ul>
           		 		<div className="navbar-header" id="navbar">
                 		<a className="navbar-brand" href="http://www.richardsoh.com">

                        </a>
                		<h4 className="navbar-text navbar-left"><b>RICHARD OH</b></h4>
            		</div>
            		</div>
    			</nav>				
                <div className="jumbotron">
                    <div className="description">
                        <h3>DEVELOPMENT | DESIGN | APPLICATION</h3>  
                    </div>
                </div>
			    <div className="container">
            
                    {this.props.children}

                </div>

            <div className="row">
                <div className="col-md-12" id="iconRow">
                <div className="col-md-3">
                </div>
                <div className="col-md-2" id="iconA">
                    <a href="http://www.github.com/rso136" target="_blank"><i className="fa fa-github-square fa-2x"></i></a>
                </div>
                <div className="col-md-2" id="iconB">
                    <a href="https://www.linkedin.com/in/richard-oh-018192128" target="_blank"><i className="fa fa-linkedin fa-2x"></i></a>
                </div>
                <div className="col-md-2" id="iconC">
                    <a href="http://www.stackoverflow.com" target="_blank"><i className="fa fa-stack-overflow fa-2x"></i></a>
                </div>
                </div>
            </div>
            <div className="row">    
                <div className="col-md-12" id="footer">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-2" id="quote">
                        <br></br>
                        <h5><b>Web Developer & Lifelong Learner</b></h5>
                    </div>
                    <div className="col-md-2" id="seal">

                    </div>
                    <div className="col-md-2" id="email"><a name="anchor"></a>
                    <br></br>
                    <h5><b>rso136@gmail.com</b></h5>
                    </div>
                </div>
            </div>    

            </div>

			)
	}
})

module.exports = Main;