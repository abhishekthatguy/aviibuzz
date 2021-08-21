import React ,{ useState } from 'react';
import ChangeEmailForm from './component/changeEmailForm';
import { Row, Col } from 'antd';

const ChangeEmail = () =>{
    const [email,setEmail]= useState('kashyapabhi688@gmail.com');
    return (
    <div>
        <Row>
        <Col span={12} offset={6}>
        <ChangeEmailForm/>
        </Col>
    </Row>
        
    </div>
    )
}
export default ChangeEmail;