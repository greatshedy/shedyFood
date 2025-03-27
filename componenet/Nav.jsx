import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"
import Hamburger from 'hamburger-react'

function Nav() {
    const [isOpen, setOpen] = useState(false)
    console.log(isOpen)
  return (
    <div className='Nav'>
        <h1 className='logo'>foodboy</h1>

        <div className='pc'>
            <ul>
                <Link className='link' to={"/"}>Home</Link>
                <Link className='link' to={"/food"}>Food</Link>
            </ul>

            <div className='Navdiv'>
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
            
        </div>

        <div className={'mobile'}>
            <div className='show1'>
                <Hamburger color='orange' toggled={isOpen} toggle={setOpen}/>
            </div>
             
            <div className={isOpen?'show':"hide"}>
            <Hamburger color='white' toggled={isOpen} toggle={setOpen}/>

            
                <ul>
                    <Link className='linkmobile' to={"/"}>Home</Link>
                    <Link className='linkmobile' to={"/food"}>Food</Link>
                </ul>

                <div className='Navdivmobile'>
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
            </div>
           
            
        
        </div>
       
        
    </div>
  )
}

export default Nav