import Header from 'components/header'
import footer from 'components/footer'

const Layout = () => {
      return(
        <Header />
        <main>{children}</main>
        <Footer />
      )
}
export default Layout
