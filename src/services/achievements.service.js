import { achievement } from "../firestore/firebaseInit.js";

class AchievementService {
    async getAchievementById(id){
        const res = await achievement.doc(id).get();
        return res;
    }

    async editAchievement(id,data){
        console.log(id, data);
        const res = await achievement.doc(id).update(data);
        return res;
    }
}
let achievementService = new AchievementService();
export default achievementService;