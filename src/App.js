import React, {useState} from 'react';
import './App.css';

//Importa os componentes de seus respectivos arquivos
import Login from './Login/Login';
import Menu from './Menu/Menu';
import Welcome from './Welcome/Welcome';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';


function App(){

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeScreen, setActiveScreen] = useState('welcome');
  const [contacts, setContact] = useState([
    {id:1, name:'Gael Damion', phone:'11987654321'},
    {id:2, name:'Maria Elisangela', phone:'11123456789'}]);

    const [contactToEdit, setContactToEdit] = useState(null);

    
    //Função de Login
    const handleLogin = (username, password) =>{
      if (username === 'admin' && password === '123'){
        setIsLoggedIn(true);
      }else{
        alert('Usuário ou senha inválidos!')
      }
    };

    const handleSaveContact = (contact) => {}
    const handleDeleteContact = (id) => {}
    const startEdit = (contact) => {}
    const showCreateForm = () =>{}
    const handleNavigate = (screen) => {}



    if(!isLoggedIn){
      return <Login onLogin={handleLogin}/>
    }


    return(
      <div>
        <Menu onNavigate={handleNavigate} onCreate={showCreateForm}/>
        <main className="content">
          {activeScreen === 'welcome' && <welcome/>}
          {activeScreen === 'list' && <ContactList contacts={contacts}
                            onEdit={startEdit} onDelete={handleDeleteContact}/>}
          {activeScreen === 'form' && <ContactForm 
                            contactToEdit={contactToEdit}
                            onSave={handleSaveContact}/>}                  
        </main>
      </div>
    )
}export default App;