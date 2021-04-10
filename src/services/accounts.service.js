import {accounts} from "../firestore/firebaseInit.js"

class AccountsService {
    async getAccountsById(id){
        const res = await accounts.doc(id).get();
        return res;
    }

    async editAccounts(id,data){
        console.log(id, data);
        const res = await accounts.doc(id).update(data);
        return res;
    }
}
let accountsService = new AccountsService();
export default accountsService;