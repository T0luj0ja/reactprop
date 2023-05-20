
import './App.css';
import Profile from './components/profile/Profile';


function App() {


  return (
    <div className="App">
      <Profile fullName="Tolu Ayoko" bio="lorem ipsum" profession="Art curator">
          <img src ="https://th.bing.com/th/id/R.1ec7587f424ab2f8c91ae5d59735c054?rik=dbMrxObhP2l2Vw&pid=ImgRaw&r=0" alt="art" />
      </Profile>
    </div>
  );
}

export default App;
