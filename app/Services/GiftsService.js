import { appState } from "../AppState.js"
import { Gift } from "../Models/Gift.js";
import { sandboxGiftApi } from "./AxiosService.js"

class GiftsService{
  async openGift(giftId) {
    const giftIndex = appState.gifts.findIndex(g => g.id == giftId)
    const foundGift = appState.gifts[giftIndex]
    console.log(foundGift);
    const res = await sandboxGiftApi.put(`/api/gifts/${giftId}`,{opened: foundGift.opened = true})
    console.log('opened gift', res.data);
    appState.gifts.splice(giftIndex,1,new Gift(res.data))
    appState.emit('gifts')

    
  }
  async getGifts() {
   const res = await sandboxGiftApi.get('/api/gifts')
   console.log('got gift', res.data);
   appState.gifts = res.data
  }

}

export const giftsService = new GiftsService()