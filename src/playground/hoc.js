// Higher Order Component (HOC) - A component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is: {props.info}</p>
	</div>
);

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>Warning!!! This is private</p>}
			<WrappedComponent {...props} />
		</div>
	)
};

// requireAuthentication

const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{ props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in</p> }
		</div>
	)
}
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='this is the drol' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='this is the drol' />, document.getElementById('app'));