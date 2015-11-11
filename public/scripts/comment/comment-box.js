import CommentList from 'comment/comment-list.js';
import CommentForm from 'comment/comment-form.js';

export default class CommentBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	loadCommentsFromServer() {
	    $.ajax({
			url: `http://localhost:7777${this.props.url}`,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
	    });
	}

	handleCommentSubmit (comment) {
		$.ajax({
			url: `http://localhost:7777${this.props.url}`,
			dataType: 'json',
			type: 'POST',
			data: comment,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
	    });
	}

	/**
	*	componentDidMount is a function that will be called automatically by React 
	*	when the component is rendered.
	*/
	componentDidMount() {
		this.loadCommentsFromServer();
	}
	render() {
		return 	<div className="commentBox">
					<h1>Comments</h1>
					<CommentList data={this.state.data}/>
					<CommentForm onCommentSubmit={this.handleCommentSubmit}/>
				</div>;
	}
}
