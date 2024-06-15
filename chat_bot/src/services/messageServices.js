import NutritionServices from './nutritionServices.js';
import MeskinaService from './meskinaService.js';
import EmmaServices from'./emmaServices.js';
export default class MessageService {

async checkBot(bot, messageText){
switch(bot.id){
    case 1 :
        return await meskinaService.getCommandChoice(messageText);
        case  2:
            return await nutritionServices.getCommandChoice(messageText);
            case 3 :
                return await emmaServices.getCommandChoice(messageText)
}
}

}
const emmaServices=new EmmaServices();
const meskinaService=new MeskinaService();
const nutritionServices =new NutritionServices();
