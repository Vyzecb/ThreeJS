// src/components/Layout.tsx
import React, { PropsWithChildren, FC } from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollIndicator from './ScrollIndicator'

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-secondary text-primary">
    <Header />
    {/* pt-16 = hoogte van de header; px responsief voor margins */}
    <main className="pt-16 flex-grow px-4 sm:px-6 lg:px-8">
      {children}
    </main>
    <ScrollIndicator />
    <Footer />
  </div>
)

export default Layout
