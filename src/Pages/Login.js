import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Loading';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/"

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

    if(user){
        navigate(from, { replace: true })
    }

    if(loading){
        return <Loading/>
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://4.bp.blogspot.com/-K1IdqgDmrJU/W1tubjO-LrI/AAAAAAAABN4/kIB_xbkes2MMSxqXF7gBxuJSr4FDuufPwCLcBGAs/s1600/Google-logo-2015-G-icon.png?w=400&h=225" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Login With Google</h2>
                    <p>If you have a Google account then try to login with Google</p>
                    <div className="card-actions">
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-secondary">Login with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;