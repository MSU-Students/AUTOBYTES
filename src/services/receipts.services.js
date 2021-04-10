import {receipts} from "../firestore/firebaseInit.js"

class ReceiptServices {
    async getReceiptsById(id){
        const res = await receipts.doc(id).get();
        return res;
    }

    async editReceipts(id,data){
        console.log(id, data);
        const res = await receipts.doc(id).update(data);
        return res;
    }
}
let receiptServices = new ReceiptServices();
export default receiptServices;