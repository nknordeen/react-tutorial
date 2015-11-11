import CommentBox  from './comment/comment-box.js';
var data = [
	{author: "Pete Hunt", text: "This is one comment"},
	{author: "Jordan Walke", text: "This is *another* comment"}
];
ReactDOM.render(
	<CommentBox url='/api/comments' />,
	document.getElementById('content')
	)