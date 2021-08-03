function Contact(props) {
    return (
        <div className="contact">
            <div className="contact-top">
                <div className="contact-gender">{props.gender}</div>
                <div className="contact-full-name">{props.firstName + " " + props.lastName}</div>
            </div>
            <div className="contact-phone">{props.phone}</div>
        </div>
    );
}

export default Contact;