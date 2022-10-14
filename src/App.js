
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      <b>{process.env.REACT_APP_NOT_SECRET_CODE}</b>
      <b>{process.env.REACT_APP_NAME}</b>
      <b>{process.env.REACT_APP_NORMAL_SECRET}</b>
      <b>{process.env.REACT_APP_SECRET}</b>
      <form>
        <input type="hidden" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />
      </form>
      <b>{process.env.NODE_ENV === "development"? process.env.REACT_APP_DEVELOPMENT : process.env.REACT_APP_PRODUCTION}</b>
      <h1>HELLO WORLD</h1>
      <h1>i know you will work2</h1>
      <h1>i know you will work</h1>
      </header>
      
<h1>UPDATED</h1>
    </div>
  );
}

export default App;
