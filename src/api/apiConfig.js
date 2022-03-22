const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey : 'd8f8edbbdc27ab9a16942772f29aa16c' ,
    originalImage : (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}` , 
    w500Image : (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}` , 
}
export default apiConfig