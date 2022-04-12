import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Events from './components/Events';
import EventsList from './components/EventsList';
import Header from './components/Header';

const App = () => {
  const events = useSelector((state) => state.events);
  const eventsList = Object.keys(events);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Events />} />
          {eventsList.map((item) => (
            <Route
              key={uuidv4()}
              path={item.replace(/\s/g, '')}
              element={<EventsList site={item} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
