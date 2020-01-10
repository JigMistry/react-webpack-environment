import React from 'react';

import PrivateHeader from '../header/private';
export default function PrivateLayout({children}) {
	console.log('private layout called', children)
	return (
		<div>
			<PrivateHeader/>
			{children}
		</div>
	);
}