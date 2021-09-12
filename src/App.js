import './App.css';
import ObsWebSocket from 'obs-websocket-js';
import ObsControllerButton from './components/ObsControllerButton';

import { useState } from 'react';

function App() {

  const obs = new ObsWebSocket();

  const [ botoes, setBotoes ] = useState(<><button className="botao"/><button className="botao"/><button className="botao"/><button className="botao"/><button className="botao"/></>)

  async function iniciar() {
    await obs.connect({address: '192.168.0.103:4444', password: 'naoseiasenha'}).then(() => console.log('conectado!'))
    const { scenes } = await obs.send('GetSceneList')
    
    setBotoes(
      <>
        <ObsControllerButton obs={obs} category="scenes" sceneName={scenes[0].name}/>
        <ObsControllerButton obs={obs} category="scenes" sceneName={scenes[1].name}/>
        <ObsControllerButton obs={obs} category="scenes" sceneName={scenes[2].name}/>
        <ObsControllerButton obs={obs} category="recording" comand="start" />
        <ObsControllerButton obs={obs} category="recording" comand="pause" />
      </>
    )
  } 
  
  iniciar();


  return (
    <div className="App">
      <div className="colum">
        {botoes}
      </div>
      
      <div className="colum">
        <ObsControllerButton obs={obs} category="recording" comand="stop" />
        <ObsControllerButton obs={obs} category="recording" comand="resume" />
        <button className="botao"/>
        <button className="botao"/>
        <button className="botao"/>
      </div>
      
      <div className="colum">
        <button className="botao"/>
        <button className="botao"/>
        <button className="botao"/>
        <button className="botao"/>
        <button className="botao"/>
      </div>
    </div>
  );
}

export default App;
