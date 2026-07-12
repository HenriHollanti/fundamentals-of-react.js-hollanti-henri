import { useState } from 'react';
import github from '../assets/github_invertocat.svg';
import mail from '../assets/mail.svg';
import phone from '../assets/phone.svg';
import styles from '../styles/Contact.module.css';

function Contact() {
    return (
        <div className={styles.contact}>
            <h1>Contact me</h1>
            <div className={styles.container}>
                <ul>
                    <li>
                        <a href='https://github.com/HenriHollanti' target='blank'>
                            <img src={github} alt='GitHub Invertocat Logo'/>
                        </a>
                    </li>
                    <li>
                        <h2><img src={phone} alt='Phone Icon'/>+358 44 975 8121</h2>
                    </li>
                    <li>
                        <h2><img src={mail} alt='Mail Icon'/>henri.hollanti@tuni.fi</h2>
                    </li>
                    <li>
                        <a href='https://github.com/HenriHollanti' target='blank'>
                            <img src={github} alt='GitHub Invertocat Logo'/>
                        </a>
                    </li>
                    <li>
                        <h2><img src={phone} alt='Phone Icon'/>+358 44 975 8121</h2>
                    </li>
                    <li>
                        <h2><img src={mail} alt='Mail Icon'/>henri.hollanti@tuni.fi</h2>
                    </li>
                    <li>
                        <h2><img src={phone} alt='Phone Icon'/>+358 44 975 8121</h2>
                    </li>
                    <li>
                        <h2><img src={mail} alt='Mail Icon'/>henri.hollanti@tuni.fi</h2>
                    </li>
                    <li>
                        <h2>+358 44 975 8121</h2>
                    </li>
                    <li>
                        <h2>henri.hollanti@tuni.fi</h2>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;