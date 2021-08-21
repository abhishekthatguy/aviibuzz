import './Home.less';
import React, { Component } from 'react'
import { Row, Col, Grid } from 'antd';
import {
    FacebookOutlined, WhatsAppOutlined , MailOutlined, MessageOutlined, LinkedinOutlined, InstagramOutlined, TwitterOutlined 
} from '@ant-design/icons';

export default class Home extends Component {



    constructor(props){
        super(props);

        this.state={
            isScrolled: false,
        }

        // this.onScrolling = this.onScrolling.bind(this);
    }

    // componentDidMount(){
    //     document.addEventListener('scroll', this.onScrolling);
    // }

    // componentWillUnmount(){
    //     document.removeEventListener('scroll', this.onScrolling);
    // }

    // onScrolling(e){
    //     console.log(e);
    //     this.setState({isScrolled: true})
    // }

    render() {
        return (
            <>
                <div className="top-intro-section">
                    <p>INDIAN CREATORS, ARTISTS & CELEBS</p>
                    <h1>Talk . Watch . stream . Support!</h1>
                    <div className="app-store-div">
                    <img src={process.env.PUBLIC_URL + '/assets/playstore.png'} alt='play-store-logo' />
                    {/* remove all process.env.PUBLIC_URL before deployment */}

                        {/* <img src='/assets/playstore.png' alt='play-store-logo' /> */}
                        <img src={process.env.PUBLIC_URL +'/assets/istore.png'} alt='istore-logo' />
                    </div>
                    <img src={process.env.PUBLIC_URL +'/assets/phone_top.png'} className='phone-img' alt='phone'></img>
                </div>
                <div className='container use-case-section'>
                    <div>
                        <Row>
                            <Col xs={{ span: 24, }} lg={{ span: 12,  }} md={{span: 12}}>
                                <div className="details">
                                    <h2>Talk/Converse</h2>
                                    <p>Get personalised video response from celebs</p>
                                </div>
                            </Col>
                            <Col className="border-right border" xs={{ span: 24,  }} lg={{ span: 12,  }} md={{span: 12}}>
                                <div className='img-div'>
                                    <img src={process.env.PUBLIC_URL +'/assets/vector_1.png' } alt='' width="100%" />
                                </div>
                            </Col>
                        </Row>
                        <Row className="reverse">
                            <Col className="border-right border-bottom border border-radius-b-r" xs={{ span: 24, }} lg={{ span: 12,  }} md={{span: 12}}>
                                <div className="details">
                                    <h2>Watch</h2>
                                    <p>watch exclusive content from your favourite streamer</p>
                                </div>
                            </Col>
                            <Col xs={{ span: 24,  }} lg={{ span: 12,  }} md={{span: 12}}>
                                <div className='img-div'>
                                    <img src={process.env.PUBLIC_URL + '/assets/vector_2.png'} alt='' width="100%" />
                                </div>    
                            </Col>
                        </Row>
                        <Row>
                            <Col className="border-left border-top border support-margin border-radius-t-l" xs={{ span: 24, }} lg={{ span: 12,  }} md={{span: 12}}>
                                <div className="details">
                                    <h2>Support</h2>
                                    <p>Support your favourite creator</p>
                                </div>
                            </Col>
                            <Col xs={{ span: 24,  }} lg={{ span: 12,  }} md={{span: 12}}>
                                <div className='img-div'>
                                    <img src={process.env.PUBLIC_URL +'/assets/vector_3.png'} alt='' width="100%" />
                                </div>
                            </Col>
                        </Row>
                        <Row className="reverse">
                            <Col xs={{ span: 24, }} lg={{ span: 12,  }} md={{span: 12}}>
                                <div className="details">
                                    <h2>Stream</h2>
                                    <p>stream your content and earn money and fans</p>
                                </div>
                            </Col>
                            <Col className="border-left border" xs={{ span: 24,  }} lg={{ span: 12,  }} md={{span: 12}}>
                                <div className='img-div'>
                                    <img src={process.env.PUBLIC_URL +'/assets/vector_4.png'} alt='' width="100%" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="social-link-fixed">
                    <FacebookOutlined /> <WhatsAppOutlined /> <MessageOutlined /> <InstagramOutlined /> <MailOutlined /> <TwitterOutlined /> <LinkedinOutlined />
                </div>
            </>
        )
    }
}
