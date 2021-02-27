import React from 'react';

function Greet(props){
	console.log(props);
	return (
		<div>
			<h1 >{props.name} Hello world</h1>
		</div>

		);
}


export default Greet;