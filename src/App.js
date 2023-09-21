import './App.scss';
import Card from './components/card/card';

const App = () => {
  return (
    <div className='container-fluid '>
      <div className='row'>
        <div className='col-4'></div>
        <div className='col-4 align-middle my-auto'>
          <Card />
        </div>
        <div className='col-4'></div>
      </div>
    </div>
  );
}

export default App;
