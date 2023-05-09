import './App.css';
import LeftContainer from './components/Left-container/Left-container';
import RightContainer from './components/Right-container/Right-container';
import NumberProvider from './components/NumberProvider/NumberProvider';

function App() {
  return (
    <NumberProvider>
      <section className='wrapper'>
        <LeftContainer />
        <RightContainer />
      </section>
    </NumberProvider>
  );
}

export default App;
