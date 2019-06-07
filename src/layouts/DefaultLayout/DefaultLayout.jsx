import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import NotificationSystem from "react-notification-system";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import appRoutes from "../../routes/appRoutes";
import { broadcastNotification } from '../../helpers/notificationHelpers';

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationSystem: null
    };
  }

  componentDidMount() {
    this.setState({
      notificationSystem: this.refs.notificationSystemContainer
    });
  }

  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf('nav-open') !== -1
    ) {
      document.documentElement.classList.toggle('nav-open');
    }

    if (e.history.action === 'PUSH') {
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }

    const broadcaster = broadcastNotification(this.state.notificationSystem);
    const { notification } = this.props;
    if (Object.keys(notification).length > 0) {
      broadcaster(notification);
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <NotificationSystem ref='notificationSystemContainer' />
        <Sidebar {...this.props} />
        <div id='main-panel' className='main-panel' ref='mainPanel'>
          <Header {...this.props} />
          <Switch>
            {appRoutes.map((prop, key) => {
              if (prop.redirect) {
                return <Redirect from={prop.path} to={prop.to} key={key} />
              }
              return <Route path={prop.path} component={prop.component} key={key} />
            })}
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { notification } = state;
  return { notification };
}

export default connect(mapStateToProps)(DefaultLayout);
