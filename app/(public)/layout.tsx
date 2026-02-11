import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'

const PublicLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default PublicLayout