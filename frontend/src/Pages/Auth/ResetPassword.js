import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../../context/actions/auth';

const ResetPassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Redirect to='/check-email' />
    }

    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}
        >
            <div>
                <h1>Request Password Reset:</h1>
                <form onSubmit={e => onSubmit(e)} style={{marginTop: '20px' }}>
                    <div className="input-field" style={{ width: '20rem'}}>
                        <i className="bx bxs-envelope"></i>
                        <input
                            type='email'
                            placeholder='Email'
                            name='email'
                            id="re_password-input"
                            value={email}
                            onChange={e => onChange(e)}
                            required
                            />
                    </div>
                    <button style={{marginTop: '15px', width: '15rem'}} className='btn' type='submit'>Reset Password</button>
                </form>
                <Link to="/" style={{ textDecoration: 'none', color: 'black', lineHeight: '3rem' }} ><i className='bx bx-arrow-back'></i> Back</Link>
            </div>
        </div>
    );
};

export default connect(null, { reset_password })(ResetPassword);