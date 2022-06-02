import React, { useState } from 'react';
import Hamburger from './Hamburger';
import Logo from './Logo';
import MainList from './MainList';

export default function Navbar() {
  return (
    <>
      <section className="nav-bar">
        <Hamburger />
        <Logo />
        <MainList />
      </section>
    </>
  );
}
