
import React, {Fragment} from 'react'
import Routes from './routes';

import LeftControlBar from './components/Controls/LeftControlBar/LeftControlBarWithData';

const App = () => {
  return (
    <Fragment>
      <div className="flex mainContainer">
        <nav className="LeftControlBar default">
          {/* Left Control Bar */}
          <LeftControlBar />
        </nav>
        <main
            id="displayBoard"
            className="default-bg ">
          <Routes />
       </main>
      </div>
    </Fragment>
  )
}

export default App
