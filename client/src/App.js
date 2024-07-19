import React from "react";
import {Route, Routes} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./reducers/store";
import './App.css';
import Auth from "./pages/Auth";
import CProfile from "./pages/Profile";
import Search from "./pages/Search";
import GetUsers from './components/GetUsers';
import Main from './pages/MainPage';
import Log from "./pages/Log";
import CreateBattle from './pages/CreateBattle';
import Battles from './pages/SearchBattle';
import ChooseShips from './pages/ChooseShips';
import SecondUser from './pages/SecondUser';
//import Test from "./pages/Test";




function App() {
 	return (
	  	<Provider store = {store}>
			<Routes>
			    <Route exact path="/" element={<Main/>} />
			    <Route exact path="/registration" element={<Auth />} />
			    <Route exact path="/search" element={<Search />} />
			    <Route exact path="/login" element={<Log />} />
			    <Route exact path="/profile" element={<CProfile/>} />
			    <Route exact path="/lobby" element={<CreateBattle />} />
			    <Route exact path="/battles" element={<Battles />}/>
			    <Route exact path='/chooseShips' element={<ChooseShips />}/>
			    <Route exact path='/lobbySecond' element={<SecondUser />}/>
			</Routes>
		</Provider>
  	);
}

export default App;



