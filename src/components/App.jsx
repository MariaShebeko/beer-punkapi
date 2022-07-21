import api from '../services/punkapi';
import { GlobalStyle } from './GlobalStyle';

function App() {
  api.getBeers(2).then(res => console.log('res all', res));
  api.getBeerById(1).then(res => console.log('res ID', res));
  return (
    <>
      <GlobalStyle />
    </>
  );
}

export default App;
