import React, { Component } from 'react';
import Keycloak from 'keycloak-js';
import { Outlet, Link } from 'react-router-dom';

export class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false };
  }

  componentDidMount() {
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
      this.setState({ keycloak, authenticated });
    });
  }

  render() {
    if (this.state.keycloak) {
      if (this.state.authenticated) {
        return (
          <div>
            {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/garden">Garden</Link>
                </li>
                <li>
                  <Link to="/plants">Plants</Link>
                </li>
                <li>
                  <Link to="/account">Account</Link>
                </li>
              </ul>
            </nav>

            <hr />

            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
            <Outlet />
          </div>
        );
      }
      return <div>Unable to authenticate!</div>;
    }
    return <div>Initializing Keycloak...</div>;
  }
}

export default Layout;
