import React from "react";
import '../styles/Contacts.css'

export const Contacts = () => {

    return(
        <div className="ContactDivContainer">
            <main className="ContactsMainContainer">
   
                <section>
                 <h1>Let's Chat</h1>
                    <p>Don't hesitate to reach out if you have any questions, need advice, or require my services. 
                    Simply fill out the form below or reach me directly via email. <br></br><br></br>
                    I am eager to collaborate with you and turn your visions into reality. 
                    Let's connect and elevate your online presence together!</p>
                    <span>Direct email: uladaharanina@gmail.com</span>
                </section>
                    <form>
                        <div id ="user_data">
                            <div>
                                <label>First Name<span> *</span></label>
                                <input type="text" placeholder="First name..."></input>
                            </div>
                            <div>
                            <label>Last Name<span> *</span></label>
                            <input type="text" placeholder="Last name..."></input>
                            </div>

                            

                        </div>
       
                        <label>Email<span> *</span></label>
                        <input type="email" placeholder="Email..."></input>

                        <label>Message<span> *</span></label>
                        <input type="textarea" placeholder="Your message..."></input>

                        <input type="submit" value="Submit"></input>
                    </form>
            </main>
        </div>
    )
}