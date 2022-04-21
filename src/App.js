import './App.css';
import Header from './components/header/Header';
import Description from './components/description/Description';
import Menu from './components/menu/Menu';
import { VariableStorage } from './store/VariablesStorage';

function App() {
  return (
    <>
      <VariableStorage>
        <Header />
        <Description />
        <Menu />
      </VariableStorage>
    </>
  );
}

export default App;
