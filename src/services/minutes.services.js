import {minutesofmeetings} from "../firestore/firebaseInit.js"

class MinutesServices {
    async getMinutesById(id){
        const res = await minutesofmeetings.doc(id).get();
        return res;
    }

    async editMinutes(id,data){
        console.log(id, data);
        const res = await minutesofmeetings.doc(id).update(data);
        return res;
    }
}
let minutesServices = new MinutesServices();
export default minutesServices;