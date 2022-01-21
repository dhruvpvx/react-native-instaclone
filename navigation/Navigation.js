import React, { useState, useEffect } from 'react';
import SplashScreen from '../src/screens/SplashScreen';
import WelcomeScreen from '../src/screens/WelcomeScreen';
import TabNavigation from './TabNavigation';
import { connect } from 'react-redux';

const Navigation = ({ user }) => {
  const [splash, setStplash] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setStplash(false)
    }, 1500);
  }, [])
  return (
    <>
      {splash
        ? <SplashScreen />
        : (
          <>
            {user
              ? <TabNavigation />
              : <WelcomeScreen />
            }
          </>
        )
      }
    </>
  )
};

const mapStateToProps = state => {
  return { user: state.LoginDetails.user }
}

export default connect(mapStateToProps, {})(Navigation)