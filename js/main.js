(() => {

	console.log("fired!");

	const sigils = document.querySelectorAll(".sigil-container"),
	      lightbox = document.querySelector('.lightbox');
	      video = document.querySelector("video");
	      lbClose = document.querySelector(".lightbox-close");

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



	      sigils.forEach(sigil => sigil.addEventListener("click", openLightbox));

	      video.addEventListener('ended', closeLightbox);
	      lbClose.addEventListener('click', closeLightbox);

})();