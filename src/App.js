import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Header from './components/Header';
import MainDiv from './components/MainDiv';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Header />
        <MainDiv />
      </div>
    </DndProvider>
  )

}

export default App;
