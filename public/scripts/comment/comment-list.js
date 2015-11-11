import Comment from 'comment/comment.js'
export default class CommentList extends React.Component {
	render() {
		var commentNodes = this.props.data.map(function (comment) {
			return <Comment author={comment.author}>{comment.text}</Comment>;
		});
		return 	<div className="CommentList">
					{commentNodes}
				</div>
	}
}
