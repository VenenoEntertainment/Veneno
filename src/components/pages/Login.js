import React, { useState } from 'react'
import { auth, googleProvider } from '../config/Firebase';
import { signInWithPopup} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const signInWithGoogle = async () => {
        try{
        await signInWithPopup(auth, googleProvider);
        navigate('/');
        } catch(err){
            console.error(err);
        }
    }


    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setError('');
            navigate('/');
        }).catch(err => setError(err.message));
    }

    return (
    <div className='container'>
    <br />
    <h2>Login</h2>
    <br />
    <form autoComplete="off" className='form-group' onSubmit={login}>
        <label htmlFor="email">Email</label>
        <input type="email" className='form-control' required
            onChange={(e) => setEmail(e.target.value)} value={email} />
        <br />
        <label htmlFor="password">Senha</label>
        <input type="password" className='form-control' required
            onChange={(e) => setPassword(e.target.value)} value={password} />
        <br />
        <button type="submit" className='btn btn-success btn-md mybtn'>LOGIN</button>
    </form>
    <br/>
    <button onClick={signInWithGoogle} className='btn btn-success btn-md mybtn'>GOOGLE</button>
    {error && <span className='error-msg'>{error}</span>}
    <br/>
    <span>Não tem uma conta? Registre-se
        <Link to="/signup"> Aqui</Link>
    </span>
</div>
  )
}

export default Login
