
  window.onload = function () {
    const resumeBtn = document.getElementById("resumeBtn");

    resumeBtn.addEventListener("click", function (event) {
      event.preventDefault(); 

      alert("You're about to view or download Izelle's Resume!");

 
      window.open("files/Resume.pdf", "_blank");
    });
  };



window.addEventListener('load', function () {
  const greet = document.getElementById('greet');
  greet.classList.add('show');
  setTimeout(() => {
    greet.classList.remove('show');
  }, 5000);
});



function expandBox(box) {
      const allBoxes = document.querySelectorAll('.achievement-box');
      allBoxes.forEach(b => {
        if (b !== box) {
          b.classList.remove('open');
        }
      });
      box.classList.toggle('open');
    }