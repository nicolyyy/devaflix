import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';


//desafio 
const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(

  <BrowserRouter>
    <Switch>  {/* o switch é como se fosse um */}
      <Route path="/" component={Home} exact />  {/* é importante ter o exact pois as routas são 'selecionadas' por uma ordem, então a primeira ordem tem que ser o /*/}
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route  path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);


