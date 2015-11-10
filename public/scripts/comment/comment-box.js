import CommentList from 'comment/comment-list.js';
import CommentForm from 'comment/comment-form.js';

export default class CommentBox extends React.Component {
	render() {
		return 	<div className="commentBox">
					<h1>Comments</h1>
					<CommentList />
					<CommentForm />
				</div>;
	}
}
