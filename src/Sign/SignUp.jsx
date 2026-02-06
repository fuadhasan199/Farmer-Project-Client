import React, { useContext } from 'react';
import { AuthContext } from '../Pages/AuthContext';
import { getAuth, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router';

const SignUp = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const navigate = useNavigate();
    const { CreateUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        
        if (password.length < 6) {
            return Swal.fire("Error", "পাসওয়ার্ড অন্তত ৬ ক্যারেক্টার হতে হবে!", "error");
        }
        if (!/[A-Z]/.test(password)) {
            return Swal.fire("Error", "পাসওয়ার্ডে অন্তত একটি বড় হাতের অক্ষর (Uppercase) থাকতে হবে!", "error");
        }
        if (!/[a-z]/.test(password)) {
            return Swal.fire("Error", "পাসওয়ার্ডে অন্তত একটি ছোট হাতের অক্ষর (Lowercase) থাকতে হবে!", "error");
        }

       
        CreateUser(email, password)
            .then(result => {
               console.log(result.user)
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo
                }).then(async() => { 
        const token = await result.user.getIdToken();
        localStorage.setItem('token', token);
                    Swal.fire({
                        title: "Registration Successful",
                        icon: "success",
                        timer: 1500
                    }); 
       
                    e.target.reset();
                    navigate('/');
                });
            })
            .catch(error => {
                Swal.fire({
                    title: "Registration Failed",
                    text: error.message,
                    icon: "error"
                });
            });
    };

    const handleGoogle = () => {
        signInWithPopup(auth, provider)
            .then(async(result) => { 
        const token = await result.user.getIdToken();
        localStorage.setItem('token', token);
                Swal.fire("Success", "Logged in with Google", "success");
                navigate('/');
            })
            .catch(error => {
                Swal.fire("Error", error.message, "error");
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Create Account!</h1>
                    <p className="py-6 text-gray-600">আমাদের কৃষক নেটওয়ার্কে যোগ দিন এবং আপনার ফসল সরাসরি বিক্রি করুন।</p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label font-semibold">Name</label>
                                <input type="text" name='name' className="input input-bordered" placeholder="Your Name" required />
                            </div>
                            <div className="form-control">
                                <label className="label font-semibold">Photo URL</label>
                                <input type="text" name='photo' className="input input-bordered" placeholder="Image link" required />
                            </div>
                            <div className="form-control">
                                <label className="label font-semibold">Email</label>
                                <input type="email" name='email' className="input input-bordered" placeholder="Email" required />
                            </div>
                            <div className="form-control">
                                <label className="label font-semibold">Password</label>
                                <input type="password" name='password' className="input input-bordered" placeholder="Password" required />
                            </div>
                            
                            <div className="mt-6 flex flex-col gap-3">
                                <button className="btn btn-success text-white">Register</button>
                                <button type="button" onClick={handleGoogle} className="btn btn-outline">
                                    <FcGoogle className='text-xl' /> Sign Up with Google
                                </button>
                            </div>
                            <p className='mt-4 text-center'>
                                Already have an account? <Link to="/login" className="text-green-600 font-bold">Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;