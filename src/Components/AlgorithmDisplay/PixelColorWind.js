/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-this-in-sfc */
import React, { useEffect, useRef } from 'react';
import { thumbsUp } from './images64';

const PixelColorWind = () => {
  const windImage = new Image();
  const pixelColorWind = useRef();
  const listenEvent = (canvas, ctx) => {
    setTimeout(() => {
      // console.info(canvas, ctx);
      ctx.drawImage(windImage, 0, 0, canvas.width, canvas.height);
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particlesArray = [];
      const numberOfParticles = 1000;

      const mappedImage = [];
      const calculateRelativeBrightness = (red, blue, green) =>
        Math.sqrt(
          red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114
        ) / 100;

      for (let y = 0; y < canvas.height; y++) {
        const row = [];
        for (let x = 0; x < canvas.width; x++) {
          const red = pixels.data[y * 4 * pixels.width + x * 4];
          const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
          const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
          const brightness = calculateRelativeBrightness(red, green, blue);
          const cell = [brightness, `rgb(${red},${green},${blue})`];
          row.push(cell);
        }
        mappedImage.push(row);
      }

      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = 0;
          this.speed = 0;
          this.velocity = Math.random() * 0.5;
          this.size = Math.random() * 1.2 + 1;
          this.position1 = Math.floor(this.y);
          this.position2 = Math.floor(this.x);
        }

        update() {
          this.position1 = Math.floor(this.y);
          this.position2 = Math.floor(this.x);
          this.speed = mappedImage[this.position1][this.position2][0];
          const movement = 2.5 - this.speed + this.velocity;
          this.y += movement;
          this.x += movement;
          if (this.y >= canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
          }
          if (this.x >= canvas.width) {
            this.x = 0;
            this.y = Math.random() * canvas.width;
          }
        }

        draw() {
          ctx.beginPath();
          ctx.fillStyle = mappedImage[this.position1][this.position2][1];
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const init = () => {
        for (let i = 0; i < numberOfParticles; i++) {
          particlesArray.push(new Particle());
        }
      };
      init();
      const animate = () => {
        // ctx.drawImage(windImage, 0, 0, canvas.width, canvas.height)
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.2;
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
          ctx.globalAlpha = particlesArray[i].speed * 0.5;
          particlesArray[i].draw();
        }
        if (!pixelColorWind.current) return;
        requestAnimationFrame(animate);
      };
      animate();
    }, 100);
  };

  useEffect(() => {
    console.info('running use effect');
    windImage.src = thumbsUp;
    const canvas = document.getElementById('pixelwindcanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 300;
    listenEvent(canvas, ctx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <canvas id="pixelwindcanvas" ref={pixelColorWind} />
    </div>
  );
};

export default PixelColorWind;
