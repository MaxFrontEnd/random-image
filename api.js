class Photo {

  async getPhoto(){
    const photo = await fetch('https://picsum.photos/600?random');
    return photo;
  }
}
