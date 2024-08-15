import React from 'react'
import "./Contact.css"
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "d3bbe29b-c46c-48d0-a66b-507184aa30a5");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };


    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>

            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>If you have any doubt or interesting project, don't be afraid to shoot a message!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <p>joao.filipe.vaz@outlook.pt</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor=""> Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact