import { useState } from 'react';


export const Component = () => {
  return (
	<div>
	  <h1>Component</h1>
	</div>
  );
};



export const Func = () => {
	return "Function";
};



export const Button = () => {
	const [text, setText] = useState("Clique aqui");

	return (
		<button onClick={() => setText("Texto alterado")}>
			{text}
		</button>
	);
};

