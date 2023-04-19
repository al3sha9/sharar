import NAVBAR from '@/components/navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <NAVBAR />
  <Component {...pageProps} />
  </>
  )
}
