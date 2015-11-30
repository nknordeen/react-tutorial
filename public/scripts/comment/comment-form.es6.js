import React from 'react';
export default class CommentForm extends React.Component {
	constructor (props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			author: null,
			text: null
		}
		// this.change = this.change.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state.tmp)		
		var author = this.refs.author.value.trim();
		var text = this.refs.text.value.trim();
		if (!text || !author) {
			return;
		}
		this.props.onCommentSubmit({author: author, text: text});
		this.refs.author.value = '';
		this.refs.text.value = '';
		return;
	}

	handleAuthorChange (e) {
		this.setState({author: e.target.value})
	}

	render() {

		return 	<form className="commentForm" onSubmit={this.handleSubmit}>
					<input type="text" placeholder="Your name" value={this.state.author}/>
					<input type="text" placeholder="Say something..." value={this.state.text}/>
					<input type="submit" value="Post" />
				</form>;
	}
}
