import React, { useState } from 'react';

function ContactForm() {
    return (
        <section className="my-3" id="contact">
            <h2 className="text-dark bg-primary p-2 display-inline-block">Contact Me</h2>
            <div className="justify-space-between">
                <a>
                    <strong>Email me! </strong>
                    <p>ivant920@gmail.com</p>
                </a>
                <a>
                    <strong>Check out my Linkedin!</strong> <br />
                    <a href="https://www.linkedin.com/in/ivan-thiessen-861648a6" target="blank">My Linkedin profile!</a>
                </a>
            </div>
        </section>
    );
}

export default ContactForm;