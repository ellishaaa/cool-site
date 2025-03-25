import React, {useState} from 'react'
import emailjs from '@emailjs/browser';
import Popup from './Popup';

const EmailForm = () => {

        const [name, setName] = useState('');    
        const [email, setEmail] = useState('');  
        const [phone, setPhone] = useState('');  
        const [date, setDate] = useState('');
        const [event, setEvent] = useState('');  
  
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
            to_name: 'Site owner', 
            event: event,
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
            setEvent('');
        })
        .catch((error) => {
            console.error('Error sending email:', error);
        });
    }

  return (
    <div className='center'>
    <form method='POST' onSubmit={handleSubmit} className='emailForm'>

        <label htmlFor="name" className="elementor-field-label">Names and surnames</label>
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

        <label htmlFor="phone" className="elementor-field-label">Phone</label> 
        <input 
        required
        id='phone'
        type='tel'
        name='phone'
        placeholder='1 (234) 567 8900'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}/> 

        <label htmlFor="date" className="elementor-field-label">Event date</label>
        <input 
        id='date'
        required
        type='date'
        value={date}
        pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
        onChange={(e) => setDate(e.target.value)}/>

        <label htmlFor="event" className="elementor-field-label">Event type</label>
        <select
        className='mb-4'
        name="event"
        value={event}
        id="event" 
        required
        onChange={(e) => setEvent(e.target.value)}
        >
                <option value="" disabled >Select an event type</option>
                <option value="Wedding Anniversary">Wedding Anniversary</option>
                <option value="Wedding">Wedding</option>
                <option value="Congress">Congress</option>
                <option value="Birthdays">Birthdays</option>
                <option value="Dedication">Dedication</option>
                <option value="Business event">Business event</option>
                <option value="Fair or exhibition">Fair or exhibition</option>
                <option value="Corporate party">Corporate party</option>
                <option value="Funeral">Funeral</option>
                <option value="Mañanitas">Mañanitas</option>
                <option value="Marriage proposals">Marriage proposals</option>
                <option value="Fifteen years">Fifteen years</option>
                <option value="Serenade">Serenade</option>
                <option value="Sweet Sixteen">Sweet Sixteen</option>
        </select>

    <button className='submit-btn' type='submit'>Submit</button>

    

    </form>
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div>
                <i className='fa-regular fa-envelope' />
                <h2 className='pt-4 popup-heading'>THANK YOU</h2>
                <p className='pb-4 mt-3'>your message has been sent!</p>
                <button className='popup-btn mb-3'>Back to &nbsp; 
                    <i class="fa-solid fa-house"></i>
                </button>
            </div>
            
    </Popup>
    </div>

    
  )
}

export default EmailForm
