import './App.css';
import CoolComponent from './CoolComponent';
import Store from './Store'
function App() {
  return (
    <div>
      <Store>
        <CoolComponent />
      </Store>
    </div>
  );
}

export default App;
