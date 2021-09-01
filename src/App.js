import './App.css';
import SignUp from './assets/components/SignUp';
import logo from './assets/logo.png'

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <SignUp />
        </div>
        <div className="col-md-7 my-auto ">
          <img className="img-fluid w-100" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
