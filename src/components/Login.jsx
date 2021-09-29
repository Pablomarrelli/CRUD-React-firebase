import React, { useState } from 'react'
import {auth} from '../firebaseconfig'
import { useHistory } from 'react-router-dom'

const Login = () => {

    const historial = useHistory()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [msgerror, setMsgError]= useState('')

    const RegistrarUsuario = (e) => {
            e.preventDefault()  
            auth.createUserWithEmailAndPassword(email, pass)
                .then((r) => {
                    historial.push('/')
                })
                .catch(e => {
                    if(e.code === 'auth/invalid-email'){
                        setMsgError('Formato de Email Incorrecto')
                    }
                    if(e.code === 'auth/weak-password'){
                        setMsgError('La contraseña debe tener 6 o mas caracteres')
                    }
        })
    }

    const LoginUsuario = () => {
        auth.signInWithEmailAndPassword(email, pass)
        .then( (r) => {
            historial.push('/')
        })
        .catch((err) => {
            if(err.code === 'auth/wrong-password'){
                setMsgError('Contraseña incorrecta')
            }
        })
    }


    return (
        <div className='row mt-5 text-center'>
            <div className='col'></div>
            <div className='col'>
                <form onSubmit={RegistrarUsuario} className=' col form-group'>
                    <input
                        onChange= {(e)  => { setEmail(e.target.value) }}
                        className='form-control'
                        placeholder='Ingrese email'
                        type="email"
                    />
                    <input 
                        onChange= {(e)=> { setPass(e.target.value) }}
                       className='form-control mt-4'
                       placeholder='Ingrese contraseña'
                       type="password"
                    />
                    <input 
                       className='btn btn-dark btn-block mt-4'
                       value='Registrar Usuario'
                       type="submit"
                    />
                </form>
                <button 
                    onClick={LoginUsuario}
                    className= 'btn btn-primary btn-block mt-4' 
                >
                    Iniciar sesion
                </button>
                {
                    msgerror != null ?
                    (
                        <div>
                            {msgerror}
                        </div>
                    )
                    :
                    (
                        <span></span>
                    )
                }
            </div>
            <div className='col'></div> 
        </div>
    );
};

export default Login;

