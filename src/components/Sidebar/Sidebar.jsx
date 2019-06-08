import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import appRoutes from '../../routes/appRoutes';
import '../../assets/css/components.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }
  render() {
    return (
      <div
        id='sidebar'
        className='sidebar'
        data-color='black'
      >
        <div className='logo'>
          <a className='simple-text logo-normal'>
            WasteMan
          </a>
        </div>
        <div className='sidebar-wrapper'>
          <ul className='nav'>
            {appRoutes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li
                    className={this.activeRoute(prop.path)}
                    key={key}
                  >
                    <NavLink
                      to={prop.path}
                      className='nav-link'
                      activeClassName='active'
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              return null;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
