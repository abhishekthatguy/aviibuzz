import React from 'react';
import CustomModal from '../../components/Modal';


export default function Login() {
    return (
        <div>
            <CustomModal
            title={'Login Page'}
            showModal={true}
            children={<h1>hello world</h1>}
            />
        </div>
    )
}
