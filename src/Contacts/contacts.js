import React, {Component} from 'react';
import Contact from './contact'
import Female_icon from "../img/female.svg";
import Male_icon from "../img/mars.svg";
import './contacts.css';

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];


class Contacts extends Component {
    state = {
        contacts : [...contacts],
    } 


    handleSearchChange = (e) => {
        
        const res = contacts.filter(item => (
            item.lastName.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1 || item.firstName.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1 || item.phone.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
        ));

        this.setState({
            search: e.target.value,
            contacts: [...res]
        })
    }




    render() {
        return (
            <div className="contact_container">
                <div className="contact_inputwrapper"> 
                    <input className="contact_input" type="text" placeholder="Search contact" value = {this.state.search} onChange = {this.handleSearchChange} />
                </div>
                
                <div className="contact_wrap">
                    {this.state.contacts.map(contactItem => {
                        return (
                            <Contact {...contactItem} icon = { contactItem.gender ? (contactItem.gender === "female" ? Female_icon : Male_icon) : null }/>
                        )
                    })}
                </div>
            </div>
        )
    }
}




export default Contacts;
