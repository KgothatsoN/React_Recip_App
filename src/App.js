import './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import Header from './components/Header/Header'

const App = () => {
    return (
        <div className="App">
            <Header title={"Recipe Mate"}/>
            <SearchForm />
        </div>
    );
}

export default App;
