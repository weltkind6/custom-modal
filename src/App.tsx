import './App.css';
import {useState} from "react";
import Modal from "./components/Modal";

function App() {
  const [isOpened, setIsOpened] = useState(true)

  return (
      <div className="App">
        <button onClick={() => setIsOpened(true)}>Toggle</button>
        <Modal
            active={isOpened}
            setActive={setIsOpened}
        >Your data
        </Modal>
      </div>
  );
}

export default App;
