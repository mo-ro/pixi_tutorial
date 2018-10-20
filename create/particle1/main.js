window.addEventListener('load', init);

function init() {
  setup();

  var particles = [];

  var stage = new createjs.Stage("canvas");
  createjs.Ticker.timingMode = createjs.Ticker.RAF;
  window.addEventListener('click', handleDown);
  // window.addEventListener('mouseup', handleup);

  createjs.Ticker.addEventListener('tick', stage);

  if(createjs.Touch.isSupported() == true){
    createjs.Touch.enable(stage)
  }


  function handleDown() {
    emitParticles();
    updateParticles();
    createjs.Ticker.addEventListener('tick', updateParticles);
    stage.update();
  }

  function emitParticles() {
    for(var i = 0; i < 20; i++) {

      var size = Math.random() * 10 + 10;
      var hue = Math.random() * 90 + 180;
      var color = "hsl(" + hue + ", 100%, 50%)";
      var particle = new createjs.Shape();
      particle.graphics
        .beginFill(color)
        .drawCircle(0, 0, size);

      // particle.compositeOperation = "lighter";
      
      stage.addChild(particle);

      particle.x = stage.mouseX;
      particle.y = stage.mouseY;

      particle.vx = 12 * Math.sin(Math.random() * 2 - 1);
      particle.vy = 12 * Math.sin(Math.random() * 2 - 1);

      particle.life = 40;

      particles.push(particle);
    }
  }

  function updateParticles() {
    for(var i = 0; i < particles.length; i++) {
      var particle = particles[i];

      particle.vx *= 0.9;
      particle.vy *= 0.9;
      particle.alpha *= 0.8;

      particle.x += particle.vx;
      particle.y += particle.vy;

      particle.life -= 1;
      if(particle.life <= 0) {
        stage.removeChild(particle);
        particles.splice(i, 1);
      }
    }
  }
}

function setup() {
  canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // document.getElementById("canvas-container").appendChild(canvas)
  // document.getElementsByTagName("canvas")[0].id("canvas")
}