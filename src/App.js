import './scss/App.scss';
import Sidebar from './components/sidebarNav/Sidebar';
import Header from './components/header/Header';
import Content from './components/content/Content';
import News from './components/news/News';
import { WatchList } from './pages/WatchList';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import WatchMovies from './components/watchMovie/WatchMovies';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="app-wrapper">
          <Sidebar />
          <Header />
          {/* <Content /> */}
          <div className="mainContainer">
            {/* <Content /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watch_list" element={<WatchList />} />
              <Route path="/watch_movie" element={<WatchMovies />} />
            </Routes>

            {/* <WatchList /> */}
          </div>
          <News />
        </div>
      </div>
    </Provider>
  );
}

export default App;
