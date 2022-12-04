import { useEffect, createRef } from 'react';
const ref = createRef();
import './home.less'
export default function Home() {
    useEffect(() => {
      
      window.onscroll = () => {
        const header = ref.current;
       
        if(window.scrollY > 0){
          if(!header.classList.contains('shadow')){
              header.classList.add('shadow');
          }
        }else{
          header.classList.remove('shadow');
        }
      }
    }, [])
    return (<div>
      <div className="header" ref={ref}>
      <img src={'/sign.png'} />
      <nav className='nav'>
        <span>ABOUT</span>
        <span>BLOG</span>
      </nav>
    </div>
    <div className="content"></div>
    </div>);
  }