import './scss/App.scss';
import Sidebar from './components/sidebarNav/Sidebar';
import Header from './components/header/Header';
import Content from './components/content/Content';
import News from './components/news/News';

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <Sidebar />
        <Header />
        <Content />
        <News />
      </div>
    </div>
  );
}

export default App;
