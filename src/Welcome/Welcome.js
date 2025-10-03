import React, {useState} from 'react';
import './Welcome.css';

function Welcome (){
    return(
        <div className="welcome-container">
            <h1> Bem-vindo á sua Agenda!</h1>
            <p>Use o menu á esquerda para gerenciar seus contatos</p>
        </div>
    );
}export default Welcome;