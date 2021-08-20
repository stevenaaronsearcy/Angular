"use strict";
var ContactCard = /** @class */ (function () {
    function ContactCard(firstName, phoneNumber) {
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
    }
    ContactCard.prototype.sendMessage = function () {
        console.log("Name: " + this.firstName + ", Phone Number: " + this.phoneNumber);
    };
    return ContactCard;
}());
var newPerson = new ContactCard("Henry", 1234567890);
newPerson.sendMessage();
