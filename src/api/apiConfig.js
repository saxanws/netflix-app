const apiConfig = {
	baseUrl: "https://api.themoviedb.org/3/",
	apiKey: "34e6b0fea79ca277c0f74e1e333a97ca",
	originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
	w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;