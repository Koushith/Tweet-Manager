import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout } from './components';

import { TweetDetails, Tweets, Home } from './screens';
import { GlobalStyle } from './utils';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='tweets' element={<Tweets />} />
          <Route path='tweetDetails' element={<TweetDetails />} />
        </Routes>
      </Layout>
    </>
  );
};
