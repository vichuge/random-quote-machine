import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <div className='row'>
        <div className='col-6'>
          <p>Hello</p>
        </div>
        <div className='col-6'>
          <p>There</p>
          <button type="button" className="btn btn-primary">Primary</button>
        </div>
      </div>
    </div>
  );
}

export default App;
