//Factory Method Pattern
//Purpose: Define an interface for creating an object but let subclasses decide which class to instantiate.

class Notification {
     send(message) {}
}

class EmailNotification extends Notification {
    send(message) {
      console.log(`Sending EMAIL: ${message}`);
    }
  }
  
  class SMSNotification extends Notification {
    send(message) {
      console.log(`Sending SMS: ${message}`);
    }
  }