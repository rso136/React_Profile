var React = require('react');
var Router = require('react-router');

var Contact = React.createClass({

	render: function() {

		return (

			<div className="row">
				<div className="col-md-6 col-md-offset-3" id="contactBox">
					<form action="/api/saved" method="POST">
						<div className="form-group">
							<label>Email address</label>
							<input type="email" className="form-control" name="email" id="emailInput" placeholder="Your Email"></input>
						</div>
						<div className="form-group">
							<label>Comment</label>
							<textarea className="form-control" rows="5" name="comment" id="messageInput" placeholder="Comment"></textarea>
						</div>
						<button type="submit" className="btn btn-custom">Submit</button>
					</form>
				</div>
			</div>

		)

	}
})

module.exports = Contact;