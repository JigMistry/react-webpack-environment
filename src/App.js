import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import PrivateLayout from './components/layout/private';
import PublicLayout from './components/layout/public';

import Login from './pages/public/Login';
import Register from './pages/public/Register';
import Dashboard from './pages/private/Dashboard';


class App extends React.Component {
	render() {

		console.log('env ', process.env.API_URL);
		return (
			<Router>
				<ul>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/register">Register</Link></li>
					<li><Link to="/dashboard">Dashboard</Link></li>
				</ul>
				<Switch>
					<Route exact path="/" component={() => <Redirect to="/login"/>}/>
					<Route exact path={['/login', '/register']}>
						<PublicLayout>
							<Route exact path="/login" component={Login}/>
							<Route exact path="/register" component={Register}/>		
						</PublicLayout>
					</Route>

					<Route exact path={['/dashboard']}>
						<PrivateLayout>
							<Route exact path="/dashboard" component={Dashboard}/>
						</PrivateLayout>
					</Route>

				</Switch>
			</Router>
		);
	}
}

// function RouteWithSubRoutes(route) {
//   return (
//     <Route
//       path={route.path}
//       render={props => (
//         // pass the sub-routes down to keep nesting
//         <route.component {...props} routes={route.routes} />
//       )}
//     />
//   );
// }

export default App;