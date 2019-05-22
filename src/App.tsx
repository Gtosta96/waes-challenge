import './assets/global.scss';

import React from 'react';
import { Provider } from 'react-redux';

import styles from './App.module.scss';
import logo from './assets/svgs/logo.svg';
import Routes from './components/Routes';
import configureStore from './redux/configureStore';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
        </header>

        <Routes />
      </div>
    </Provider>
  );
};

export default React.memo(App);
