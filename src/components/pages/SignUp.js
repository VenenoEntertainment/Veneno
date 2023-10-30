import React, {useState} from 'react'
import '../../App.css';
import { auth, db, googleProvider } from '../config/Firebase';
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError ] = useState('');
    const navigate = useNavigate();
        

    const Register = (e) =>
    {
        e.preventDefault();
        console.log('form submitted');
        auth.createUserWithEmailAndPassword(email, password).then((credentials)=>{
            db.collection('SignedUpUserData').doc(credentials.user.uid).set({
                Name: name,
                Email: email
            }).then(()=>{
                 setName('');
                 setEmail('');
                 setPassword('');
                 setError('');
                 navigate('/login');
             }).catch(err=>setError(err.message));
         }).catch(err=>setError(err.message));
    }

    return (
        <div className='container'>
        <br/>
        <h2>Registre-se</h2>
        <hr/>
        <form autoComplete='off' className='form-group' onSubmit={Register}>
             <label htmlFor='Name'>Nome</label>
             <br/>
             <input type='text' className='form-control' required
             onChange={(e)=>setName(e.target.value)} value={name}/>
             <br/>
             <label htmlFor='Email'>Email</label>
             <br/>
             <input type='email' className='form-control' required
             onChange={(e)=>setEmail(e.target.value)} value={email}/>
             <br/>
             <label htmlFor='Password'>Senha</label>
             <br/>
             <input type='password' className='form-control' required
             onChange={(e)=>setPassword(e.target.value)} value={password}/>
             <br/>
             <button type='submit' className='btn btn-success btn-md mybtn'>REGISTRE-SE</button>
        </form>
        {error && <div className='error-msg'>{error}</div>}
         <br/>
         <span>Ja tem uma conta? Logue
             <Link to='/Login'> aqui</Link>
         </span>
     </div>
    );
}