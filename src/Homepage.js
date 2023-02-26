import React from 'react';
import Button from 'uicomponents/Button';

const Homepage = ({ children }) => {

  // create a homepage component that has a heading and description
  // about module federation with webpack 5
  // and a button that says "Sign in" that take you to a login page
  // return (
  // <>
  //   <button>{children}</button>
  //   <Button>Sign in</Button>
  // </>
  // );

  return (
    <>
      <h1>Module Federation with Webpack 5</h1>
      <p>
        Module Federation is a new feature in Webpack 5 that allows you to
        dynamically load code from other webpack bundles at runtime.
      </p>
      <Button>Sign in</Button>
    </>
  );
};

export default Homepage;