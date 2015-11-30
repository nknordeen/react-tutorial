import Comment from './comment.es6.js'
import React from 'react';

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
