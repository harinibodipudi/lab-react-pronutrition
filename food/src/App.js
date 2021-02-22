import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox'
import Search from './components/Search'
import { render } from 'react-dom';

function App(){

return ( < div className = "App" >
<Search/> <FoodBox name = "pizza"
            cal = "400"
            img = "https://i.imgur.com/eTmWoAN.png" / >
            <FoodBox name = "orange"
            cal = "200"
            img = "https://img.icons8.com/cotton/2x/orange.png" / >
            <FoodBox name = "Apple"
            cal = "100"
            img = "https://st.depositphotos.com/2046901/4507/v/380/depositphotos_45075345-stock-illustration-red-apple-icon.jpg" / >
            
    </div>
);
}


export default App;