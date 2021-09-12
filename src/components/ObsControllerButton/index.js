import React from 'react'
import './index.css'

function ObsControlerButton(props) {

    function trocarCena() {
        props.obs.send('SetCurrentScene', { "scene-name": props.sceneName})
    }

    function iniciarGravacao() {
        props.obs.send('StartRecording')
    }

    function pausarGravacao() {
        props.obs.send('PauseRecording')
    }

    function retomarGravacao() {
        props.obs.send('ResumeRecording')
    }

    function finalizarGravacao() {
        props.obs.send('StopRecording')
    }

    function iniciarTranmissao() {
        props.obs.send('StartStreaming')
    }

    function finalizarTranmissao() {
        props.obs.send('StopStreaming')
    }


    if (props.category === "scenes") {
        return  <button className="button" onClick={trocarCena}>{props.sceneName}</button>
    }

    else if (props.category === "recording") {
        if(props.comand === "start") {
            return <button className="button" onClick={iniciarGravacao}>START RECORD</button>
        }

        else if(props.comand === "pause") {
            return<button className="button" onClick={pausarGravacao}>PAUSE RECORD</button>
        }

        else if(props.comand === "resume") {
            return <button className="button" onClick={retomarGravacao}>RESUME RECORD</button>
        }

        else if(props.comand === "stop") {
            return <button className="button" onClick={finalizarGravacao}>STOP RECORD</button>  
        }
    }

    else if (props.category === "streaming") {
        if(props.comand === "start") {
            return <button className="button" onClick={iniciarTranmissao}>START STREAMING</button>
        }

        else if(props.comand === "stop") {
            return <button className="button" onClick={finalizarTranmissao}>STOP STREAMING</button>
        }
    }
}

export default ObsControlerButton
