import React, { Fragment } from 'react';
import Landing from '../components/Landing';
import Features from '../components/Features';
import StayProductive from '../components/StayProductive';
import Testimoniales from '../components/Testimoniales';
import GetStarted from '../components/GetStarted';

function Home() {
  return (
    <Fragment>
      <Landing />
      <Features />
      <StayProductive />
      <Testimoniales />
      <GetStarted />
    </Fragment>
  )
}

export default Home