import React from 'react';

function ContactForm({ data }) {
    return (
        <div className="form-container">
            <form className="form">
                <input type="text" placeholder={data.contact.form.name} className="input" />
                <input type="email" placeholder={data.contact.form.email} className="input full-width" />
                <textarea placeholder={data.contact.form.message} className="textarea full-width"></textarea>
                <button type="submit" className="submit-button">{data.contact.form.button}</button>
            </form>
        </div>
    );
}

export default ContactForm;
