export class Gift{

  constructor(data){
    this.id= data.id
    this.tag = data.tag
    this.url = data.url
    this.opened= data.opened
  }

  static giftCardTemplate(gift){
    return`
    <div class="col-4">
      <div class="card fixedcard" onclick="app.giftsController.openGift('${gift.id}')";">
                <img src="${gift.url}" class="card-img-top" alt="img">
                <div class="card-body">
                  
                  <p class="card-text">${gift.tag}</p>
                </div>
              </div>
            </div>
    `
  }
}