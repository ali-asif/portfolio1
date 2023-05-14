// import { ColorModeSwitcher } from './theme'
// import  Body  from './body/page';

import Navbar from "./Navbar/page";
import Body from "./body/page";
import Button from './neonbutton/page'
import Footer from "./footer/page";



export default function Home() {

  return (
  <div className="flex flex-col">
  <body>
  <Navbar />
  <Body />
  <Button />
  <Footer />
  </body>
  </div>
  )
}
