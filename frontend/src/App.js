
import './App.css';
import Frontpage from './components/Frontpage';
import Show from './components/Show';
import AddShow from './components/AddShow';
import {Route, Routes} from 'react-router-dom'



function App() {
  return (
    <section>
   <Routes>
    <Route path="/" index element={<Frontpage />} />
    <Route path=":slug" element={<Show />} />
    <Route path="/add-show" element={<AddShow />} />
   </Routes>
   </section>
  );
}

export default App;
