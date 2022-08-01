import React from 'react';
import Head from 'next/head';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
