import React from 'react';
import './settings.css';

class UserInput extends React.Component {

    constructor(props) {
        super();
        let currentValue = props.myValue;
    }
    render(){
        return

        ;
    }
}

class Settings extends React.Component {

    constructor(props) {

        super();
        let temp_path =  window.location.pathname.split("/");
        let userId = temp_path[2];
        let user = props.function(userId);
        let name = user.name;
        let lastname = user.lastname;
        let avatar = user.avatar;
        this.state = {name: name, surname: lastname, avatar: avatar};
    }

    changeName() {
        //Меняем имя:
        this.setState({name: 'Петров'});
        console.log(this);
    }

    changeLastName() {
        //Меняем и имя, и фамилию:
        this.setState({surname: 'Петров'});
    }

    render() {
        //Выводим имя, фамилию и кнопку для изменения:
        return <div className="container">
            <h2>Настройки пользователя</h2>
            <div className="row">
                <div className="col-sm-3">
                    <img src={this.state.avatar} width="90%" alt=""/>
                </div>
                <div className="col-sm-1">
                    <p>Имя:</p>
                    <p>Фамилия:</p>
                </div>
                <div className="col-sm-8">
                    <p>
                        <span className="userText">{this.state.name}</span>
                        <span className="edit-btn buttonText" id="editB"  onClick={this.changeName.bind(this)}>[изменить]</span>
                        <span className="save-btn buttonText" id="saveB">[сохранить]</span>
                        <span className="cancel-btn buttonText" id="cancelB">[отменить]</span>
                    </p>
                    <p className="userText">{this.state.surname}</p>
                </div>
            </div>
        </div>;
    }
}

export default Settings;