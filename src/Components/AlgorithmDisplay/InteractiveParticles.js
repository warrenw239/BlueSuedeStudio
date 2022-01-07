/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-this-in-sfc */
import React, { useEffect, useRef } from 'react';

const InteractiveParticles = () => {
  let particleArray = [];
  let adjustScreenX = window.innerWidth / 2.7;
  let adjustScreenY = window.innerHeight / 3;

  const mouse = {
    x: null,
    y: null,
    radius: 150,
  };
  const interactiveParticlesRef = useRef();
  window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    mouse.radius = 150;
  });

  const listenEvent = (canvas, ctx) => {
    ctx.fillStyle = 'white';
    ctx.font = '50px verdana';
    ctx.fillText('𐐒', 35, 45);
    const textCoordinates = ctx.getImageData(0, 0, 300, 300);

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 3;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 1;
      }

      draw() {
        ctx.fillStyle = '#66b3ff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        adjustScreenX = window.innerWidth / 2.7;
        adjustScreenY = window.innerHeight / 3;
        let dx = mouse.x - this.x - adjustScreenX;
        let dy = mouse.y - this.y - adjustScreenY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = mouse.radius;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * this.density;
        const directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }
    }

    const init = () => {
      particleArray = [];
      for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
          if (
            textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] >
            128
          ) {
            // const positionX = x + adjustX;
            // const positionY = y + adjustY;
            const positionX = x - 20;
            const positionY = y;
            particleArray.push(new Particle(positionX * 5, positionY * 5));
          }
        }
      }
    };
    const connect = () => {
      for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++) {
          const dx = particleArray[a].x - particleArray[b].x;
          const dy = particleArray[a].y - particleArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 20) {
            ctx.strokeStyle = '#66b3ff';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(particleArray[a].x, particleArray[a].y);
            ctx.lineTo(particleArray[b].x, particleArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
    init();
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw();
        particleArray[i].update();
      }
      connect();
      if (!interactiveParticlesRef.current) return;
      requestAnimationFrame(animate);
    };
    animate();
  };

  useEffect(() => {
    const canvas = document.getElementById('interactiveCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 300;
    listenEvent(canvas, ctx);
    return window.removeEventListener('mousemove', () => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <canvas id="interactiveCanvas" ref={interactiveParticlesRef} />
    </div>
  );
};

export default InteractiveParticles;

// const canvas = document.getElementById('canvas1')
// const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth
// canvas.height = window.innerHeight
// let particleArray = [];
// let adjustX = 10
// let adjustY = 20

// const mouse = {
//     x: null,
//     y: null,
//     radius: 150
// }

// window.addEventListener('mousemove', (event) => {
//     mouse.x = event.x
//     mouse.y = event.y
//     mouse.radius = 150
// })

// ctx.fillStyle = 'white'
// ctx.font = '50px verdana';
// ctx.fillText('A', 50, 60)
// const textCoordinates = ctx.getImageData(0, 0, 100, 100)

// class Particle {
//     constructor(x, y) {
//         this.x = x
//         this.y = y
//         this.size = 3;
//         this.baseX = this.x
//         this.baseY = this.y
//         this.density = (Math.random() * 30) + 1;
//     }
//     draw() {
//         ctx.fillStyle = 'white';
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.closePath();
//         ctx.fill();
//     }
//     update() {
//         let dx = mouse.x - this.x;
//         let dy = mouse.y - this.y;
//         let distance = Math.sqrt(dx * dx + dy * dy);
//         let forceDirectionX = dx / distance
//         let forceDirectionY = dy / distance
//         let maxDistance = mouse.radius
//         let force = (maxDistance - distance) / maxDistance;
//         let directionX = forceDirectionX * force * this.density
//         let directionY = forceDirectionY * force * this.density

//         if (distance < mouse.radius) {
//             this.x -= directionX
//             this.y -= directionY
//         } else {
//             if (this.x !== this.baseX) {
//                 let dx = this.x - this.baseX
//                 this.x -= dx/10
//             }
//             if (this.y !== this.baseY) {
//                 let dy = this.y - this.baseY
//                 this.y -= dy/10
//             }
//         }
//     }
// }

// const init = () => {
//     particleArray = [];
//     for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
//         for (x = 0, x2 = textCoordinates.width; x < x2; x++) {
//             if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
//                 let positionX = x + adjustX;
//                 let positionY = y + adjustY;
//                 particleArray.push(new Particle(positionX * 5, positionY * 5))
//             }
//         }
//     }
// }
// const connect = () => {
//     for (let a = 0; a < particleArray.length; a++) {
//         for (let b = a; b < particleArray.length; b++) {
//             let dx = particleArray[a].x - particleArray[b].x
//             let dy = particleArray[a].y - particleArray[b].y
//             let distance = Math.sqrt(dx * dx + dy * dy)
//             if (distance < 20) {
//                 ctx.strokeStyle = 'white'
//                 ctx.lineWidth = 2;
//                 ctx.beginPath();
//                 ctx.moveTo(particleArray[a].x, particleArray[a].y);
//                 ctx.lineTo(particleArray[b].x, particleArray[b].y);
//                 ctx.stroke();
//             }
//         }
//     }
// }
// init()
// const animate = () => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for(let i = 0; i < particleArray.length; i++) {
//         particleArray[i].draw();
//         particleArray[i].update();
//     }
//     connect()
//     requestAnimationFrame(animate)
// }
// animate()
