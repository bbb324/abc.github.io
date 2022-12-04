import './home.less'
export default function Home() {
    return (<div className="header">
      <img src={'/sign.png'} />
      <nav className='nav'>
        <span>ABOUT</span>
        <span>BLOG</span>
      </nav>
    </div>);
  }