import React from "react";
import '../styles/Contacts.css'

export const Contacts = () => {

    return(
        <div className="ContactDivContainer">
            <main className="ContactsMainContainer">
                <h1>Contacts</h1>
                <section>
                    <form>
                        <label>Full Name*</label>
                        <input type="text" placeholder="Type your name..."></input>

                        <label>Email*</label>
                        <input type="email" placeholder="Type your email..."></input>

                        <label>Message*</label>
                        <input type="textarea" placeholder="Type your message..."></input>

                        <input type="submit" value="Send"></input>
                    </form>
                </section>
            </main>
        </div>
    )
}