(() => {

	console.log("fired!");

	const sigils = document.querySelectorAll(".sigil-container"),
	      lightbox = document.querySelector('.lightbox'),
	      video = document.querySelector("video"),
	      lbClose = document.querySelector(".lightbox-close"),
	      topBanners = document.querySelector("#houseImages");

	      function openLightbox(){
	      	//debugger;
	      	 let targetHouse = this.className.split(" ")[1];

	      	 // this gives us back house name => the second class in all the shields ie stark, lanister...
	      	 // flip ths to uppercase
	      	let targetVid = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

	      	 video.src=  `vide/House-${targetHouse}.mp4`;
	      	 lightbox.classList.add('lightbox-on');
	      	 video.load();
	      	 video.play();
	      }

	      function closeLightbox() {
	      	lightbox.classList.remove("lightbox-on");
	      	video.currentTime = 0;
	      	video.pause();
	      }


	      function animateBanners() {
	      	// move the banners to the left so that the current house banner is visible 

	      	// grab the data-offset njmbe from the shield we're clicking on
	      	// 
	      	const offSet = 600;
	      	let currentOffset = this.dataset.offset * offSet;
	      	TweenMax.to(topBanners, 0.7, {right: currentOffset});
	      	// move the banners using the right css property
	      	topBanners.style.right = currentOffset + "px";
	      }



	      //sigils.forEach(sigil => sigil.addEventListener("click", openLightbox));

	      // animate the banners at the top
	      sigils.forEach(sigil => sigil.addEventListener("click", animateBanners));

	      video.addEventListener('ended', closeLightbox);
	      lbClose.addEventListener('click', closeLightbox);

})();