import React from 'react';

import PublicHeader from '../header/public';
export default function PublicLayout({children}) {
	console.log('public layout called', children)
	return (
		<div>
			<PublicHeader/>
			{children}
		</div>
	);
}