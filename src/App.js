import "./App.css";
import ProfilePhoto from "./component/profile/profilephoto";
import FullName from "./component/profile/fullname";
import Adress from "./component/profile/adress";

function App() {
  return (
    <div className="App">
      <FullName />
      <br />
      <ProfilePhoto />
      <br />
      <Adress />
    </div>
  );
}

export default App;
