(() => {

	console.log("fired!");

	const sigils = document.querySelectorAll(".sigil-container"),
	      lightbox = document.querySelector('.lightbox'),
	      video = document.querySelector("video"),
	      lbClose = document.querySelector(".lightbox-close"),
	      topBanners = document.querySelector("#houseImages"),
	      tagline = document.querySelector('.house-name'),
	      houseinfo = document.querySelector('.house-info');


          // this is a container for some dynamic data           
 const houseData = [//Stark           
 // ackticks let you keep the punctuation you're

//using inside of text           
` House Stark of Winterfell is a Great House of
Westeros, ruling over the vast region known as the North from their seat in
Winterfell. It is one of the oldest lines of Westerosi nobility by far,
claiming a line of descent stretching back over eight thousand years. Before
the Targaryen conquest, as well as during the War of the Five Kings and
Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled
over the region as the Kings in the North.`

	      ];

	      function openLightbox(){
	      	//debugger;
	      	 let targetHouse = this.className.split(" ")[1];

	      	

	      	 // this gives us back house name => the second class in all the shields ie stark, lanister...
	      	 // flip ths to uppercase
	      	let targetVid = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

	      	 //populate the tagline
	      	 tagline.textContent = `House ${targetVid}`;

	      	 //populate the house content
	      	 houseinfo.textContent = houseData[0];


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



	      sigils.forEach(sigil => sigil.addEventListener("click", openLightbox));

	      // animate the banners at the top
	      //sigils.forEach(sigil => sigil.addEventListener("click", animateBanners));

	      video.addEventListener('ended', closeLightbox);
	      lbClose.addEventListener('click', closeLightbox);

})();