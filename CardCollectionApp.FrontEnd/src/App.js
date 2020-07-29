
import React, {Fragment} from 'react'
import Routes from './routes';

const App = () => {
  return (
    <Fragment>
      <header id="navBar">
        <nav> Nav Bar </nav>
      </header>
      <div className="flex mainContainer">
        <aside id="leftControllBar">
          {/* Left Control Bar */}
          Left Nav
        </aside>
        <main
            id="displayBoard"
            className="greenFeltBg">
          <Routes />
       </main>
      </div>
      <footer>
        Footer
      </footer>
    </Fragment>
  )
}

export default App
