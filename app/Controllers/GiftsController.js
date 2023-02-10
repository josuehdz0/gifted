import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { giftsService } from "../Services/GiftsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawGifts(){
  let template=''
  appState.gifts.forEach(g => template += Gift.giftCardTemplate(g))
  setHTML('gift', template)
}

export class GiftsController{

      constructor(){
        console.log('controller hello');
        this.getGifts()
        appState.on('gifts',_drawGifts)
      
      }

      async getGifts(){
        try {
          await giftsService.getGifts()
        } catch (error) {
          console.error(error);
          Pop.error(error.message)
        }
      }

      async openGift(giftId){
        try {
          await giftsService.openGift(giftId)
        } catch (error) {
          console.error(error);
          Pop.error(error.message)
        }
      }
    }