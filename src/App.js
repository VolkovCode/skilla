import './App.css';
import {SideBar} from "./components/sideBar";
import {MainWindow} from "./components/window";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchCalls} from "./redux/features/asyncActions";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCalls());
  }, [dispatch]);


  return (
    <div className="App">
      <SideBar/>
      <MainWindow/>
    </div>
  );
}

export default App;
