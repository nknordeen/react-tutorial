import CommentList from 'comment/comment-list.js';
import CommentForm from 'comment/comment-form.js';

export default class CommentBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	componentDidMount() {
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
	render() {
		return 	<div className="commentBox">
					<h1>Comments</h1>
					<CommentList data={this.state.data}/>
					<CommentForm />
				</div>;
	}
}
