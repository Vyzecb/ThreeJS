// src/components/Layout.tsx
import React, { PropsWithChildren, FC } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollIndicator from './ScrollIndicator';

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-secondary text-primary">
    <Header />
    <main className="flex-grow">{children}</main>
    <ScrollIndicator />
    <Footer />
  </div>
);

export default Layout;
