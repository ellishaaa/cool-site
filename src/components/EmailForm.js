import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Popup from './Popup';

const EmailForm = () => {

        const [name, setName] = useState('');    
        const [email, setEmail] = useState('');  
        const [phone, setPhone] = useState('');  
        const [date, setDate] = useState('');
        const [message, setMessage] = useState('');  
  
        // Submit modal
        const [buttonPopup, setButtonPopup] = useState(false);

        const handleSubmit = (e) => {
            e.preventDefault();
        
        // EmailJS service ID, template ID, Public Key
        const serviceId = 'service_7xe8ied';
        const templateId = 'template_ueh2ov8';
        const publicKey = 'MLvisiQpjDgGA9SRN';

        // Create a new object that contains the template
        const templateParams = {
            from_name: name,
            from_email: email, 
            from_phone: phone, 
            date: date,
            to_name: 'Ellishaaa', 
            from_message: message,
        };

        // Send email using EmailJS
        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {

            // alert('Email sent!', response);
            setButtonPopup(true);
            
            setName('');
            setEmail('');
            setPhone('');
            setDate('');
            setMessage('');
        })
        .catch((error) => {
            console.error('Error sending email:', error);
        });
    }

  return (
    <div className='center'>
    <form method='POST' onSubmit={handleSubmit} className='emailForm'>

        <label htmlFor="name" className="elementor-field-label">Name</label>
        <input 
        required
        id='name'
        type='text'
        name='name'
        placeholder='John Doe'
        value={name}
        onChange={(e) => setName(e.target.value)}/>

        <label htmlFor="email" className="elementor-field-label">Email</label>
        <input 
        required
        id='email'
        type='email'
        name='email'
        placeholder='j.doe123@gmail.com'
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>

        <label htmlFor="phone">Phone <span>(optional)</span></label> 
        <input
        id='phone'
        type='tel'
        name='phone'
        placeholder='1 (234) 567 8900'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}/> 


        <label htmlFor="message" className="elementor-field-label">Message</label>
        <textarea 
        required
        id='message'
        type='message'
        name='message'
        value={message}
        placeholder='Give me the deets!'
        rows='10'
        onChange={(e) => setMessage(e.target.value)}></textarea>


    <button className='submit-btn' type='submit'>Submit</button>

    

    </form>
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div>
                <i className='fa-regular fa-envelope' />
                <h2 className='pt-4 popup-heading'>THANK YOU</h2>
                <p className='pb-4 mt-3'>your message has been sent!</p>
                 <Link to='/'>
                 <button className='popup-btn mb-3'>Back to &nbsp; 
                    <i class="fa-solid fa-house"></i>
                </button>
                 </Link>
               
            </div>
            
    </Popup>
    </div>

    
  )
}

export default EmailForm
