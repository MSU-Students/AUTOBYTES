import { event } from "../firestore/firebaseInit.js";

class EventService {
//   async getEvents() {
//     let eventArr = [];
//     event.onSnapshot(docs => {
//       return docs;
//       //   docs.forEach(doc => {
//       //     eventArr.push({
//       //       id: doc.id,
//       //       eventName: doc.data().eventName,
//       //       eventDate: doc.data().eventDate,
//       //       eventDetails: doc.data().eventDetails,
//       //       eventStatus: doc.data().eventStatus
//       //     });
//       //     return eventArr;
//       //   });
//     });
//   }

  async getEventById(id) {
    const res = await event.doc(id).get();
    return res;
  }
  
  async editEvent(id, data) {
    console.log(id, data);
    const res = await event.doc(id).update(data);
    return res;
  }
}

let eventService = new EventService();
export default eventService;
