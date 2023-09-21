import './App.scss';
import Card from './components/card/card';

const App = () => {
  return (
    <div className='container-fluid '>
      <div className='row'>
        <div className='col-12 col-sm-1 col-md-2 col-lg-4'></div>
        <div className='col-12 col-sm-10 col-md-8 col-lg-4 align-middle my-auto'>
          <Card />
        </div>
        <div className='col-12 col-sm-1 col-md-2 col-lg-4'></div>
      </div>
    </div>
  );
}

export default App;
