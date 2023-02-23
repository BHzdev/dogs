import React from 'react';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginPasswordReset = () => {
  const { login, setLogin } = React.useState('');
  const { key, setKey } = React.useState('');
  const password = useForm();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const login = params.get('login');
    const key = params.get('key');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  return (
    <div>
      <p>{key}</p>
      <p>{login}</p>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" />
        <Button>Resetar</Button>
      </form>
    </div>
  );
};

export default LoginPasswordReset;
