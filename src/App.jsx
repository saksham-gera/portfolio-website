import SideNav from './sideNav.jsx'
import Content from './content.jsx'
import './App.css'


function App() {
  
  return (
    <div className="app">
      <div className="bg-image"></div>
      <div className="side-bar"> <SideNav/> </div>
      <div className="content">
        <Content />
      </div>
    </div>
  )
}

export default App
