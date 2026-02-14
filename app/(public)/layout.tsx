import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'

const PublicLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Header />
      <div className='mt-20 md:mt-10'>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default PublicLayout