import { useState } from 'react';
import api from './services/api';

const SignInComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingAuth, setLoadingAuth] = useState(false);

  const signIn = async () => {
    setLoadingAuth(true);
    try {
      const response = await api.post('/Auth/login', {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error signing in:', error);
    } finally {
      setLoadingAuth(false);
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={signIn} disabled={loadingAuth}>
        Sign In
      </button>
    </div>
  );
};

export default SignInComponent;