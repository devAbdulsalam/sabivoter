import './../globals.css'
import Header from "../components/header"
import Footer from "../components/Footer"
import Provider from './provider'


export const metadata = {
  title: 'Sabi voter',
  description: 'online voting app',
}
export default function RootLayout({children}){
  return (
    <html lang="en">
      <body>        
        <Provider>
          <Header/>
          <div className="w-full min-h-screen">{children}</div>
          <Footer/>
        </Provider>
        </body>
    </html>
  )
}
