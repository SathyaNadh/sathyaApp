import '@/styles/globals.css'
import '@/styles/media.css'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from '@/Components/footer'
import Header from '@/Components/header'

import { Menu } from '@/Components/menu'

export default function App({ Component, pageProps }) {
  return <div>
    <Header />
    <Menu />
   <Component {...pageProps} />
   <Footer />
   </div>
}
