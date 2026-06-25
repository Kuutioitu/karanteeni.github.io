import { AppProps } from 'next/app'
import { AppContextProvider } from '../store/context'
import { ToastContainer } from 'react-toastify';

import '../styles/global.css'
import '../styles/historia.css'
//import '../styles/winter.css'
// import '../styles/easter.css'
import '../styles/summer.css'
// import '../styles/autumn.css'

function App({ Component, pageProps }: AppProps) {
    return (
        <AppContextProvider>
            <Component {...pageProps} />
            <ToastContainer position='bottom-center' />
        </AppContextProvider>
    )
}

export default App
