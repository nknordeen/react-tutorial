import CommentBox  from './comment/comment-box.es6.js';
import ReactDOM from 'react-dom';
import React from 'react';

var data = [
	{author: "Pete Hunt", text: "This is one comment"},
	{author: "Jordan Walke", text: "This is *another* comment"}
];
ReactDOM.render(
	<CommentBox url='/api/comments' />,
	document.getElementById('content')
	)