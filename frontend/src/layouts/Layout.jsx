import React from 'react'
import Footer from '../components/common/footer/Footer'
import Header from '../components/common/header/Header'
import Top from '../containers/pages/Top'

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <main>
                {/* <Search v-if="isSearchVisible" @toggleSearch="toggleSearch"/> */}
                <Top />
            </main>
            <Footer />
        </>
    )
}

export default Layout