import React, {useState} from "react";

import { useHistory } from "react-router-dom";

import "./Welcome.scss";

export const Welcome: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const history = useHistory();

  const handleSubmit = async () => {
    const usersFetch = await fetch('https://iknow-be.herokuapp.com/users');
    const users = await usersFetch.json();
    const existedUser = users.find((user: {name: string; id: number;}) => user.name === userName);
debugger;
    if (existedUser) {
      history.push('/game', {
        userId: existedUser.id,
      });
    }

    const result = await fetch('https://iknow-be.herokuapp.com/users', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: userName, id: users.length}),
    });

    if (result.status === 201) {
      history.push('/game', {
        userId: users.length,
      });
    }
  };

  return (
    <div className="welcome">
      <h1 className="welcomeTitle">Я Знаю!</h1>
      <div className="greeting">Добро пожаловать в игру</div>
      <input className="input" type="text" placeholder="Введи имя" value={userName}
             onChange={(text) => setUserName(text.currentTarget.value.toUpperCase())}/>
      <input type="submit" className="submit" value="Го!" onClick={handleSubmit} />
    </div>
  );
};

export default Welcome;
