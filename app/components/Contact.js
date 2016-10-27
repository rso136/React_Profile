var React = require('react');
var Router = require('react-router');

var Contact = React.createClass({

	render: function() {

		return (

			<div className="row">
				<div className="col-md-6 col-md-offset-3" id="contactBox">
					<form action="/api/saved" method="POST">
						<div className="form-group">
							<label>Email</label>
							<input type="email" className="form-control" name="email" id="emailInput" placeholder="Your Email" required></input>
						</div>
						<div className="form-group">
							<label>Comment</label>
							<textarea className="form-control" rows="5" name="comment" id="messageInput" placeholder="Send me a comment and I'll be glad to get back to you!" required></textarea>
						</div>
						<button type="submit" className="btn btn-custom">Send</button>
					</form>
				</div>
			</div>

		)

	}
})

module.exports = Contact;