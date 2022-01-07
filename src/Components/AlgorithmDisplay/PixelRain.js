/* eslint-disable react/no-this-in-sfc */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
import React, { useEffect, useRef } from 'react';
import { thumbsUp } from './images64';

const PixelRain = () => {
  const pixelraincanvas = useRef();

  const image = new Image();
  const listenEvent = (canvas, ctx) => {
    const particlesArray = [];
    const numberOfParticles = 1500;
    const detail = 1;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const grid = [];
    function calculateBrightness(red, green, blue) {
      return Math.sqrt(
        red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114
      );
    }
    for (let y = 0; y < canvas.height; y += detail) {
      const row = [];
      for (let x = 0; x < canvas.width; x += detail) {
        const red = pixels.data[y * 4 * pixels.width + x * 4];
        const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
        const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
        const brightness = calculateBrightness(red, green, blue) / 100;
        const cell = [brightness, `rgb(${red},${green},${blue})`];
        row.push(cell);
      }
      grid.push(row);
    }
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.speed = 0;
        this.velocity = Math.random() * 0.2;
        this.size = Math.random() * 2 + 0.3;
      }

      update() {
        this.speed =
          grid[Math.floor(this.y / detail)][Math.floor(this.x / detail)][0];
        const movement = 2.5 - this.speed + this.velocity;
        this.y += movement;
        if (this.y >= canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      }
    }

    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }
    init();

    function animate() {
      ctx.globalAlpha = 0.05;
      ctx.fillStyle = 'rgb(0, 0,0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 0.2;
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        ctx.globalAlpha = particlesArray[i].speed * 0.3;
        particlesArray[i].draw();
      }
      if (!pixelraincanvas.current) return;
      requestAnimationFrame(animate);
    }
    animate();
  };

  useEffect(() => {
    image.src = thumbsUp;
    const canvas = document.getElementById('pixelraincanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 300;
    // image.addEventListener('load', listenEvent(canvas, ctx));
    listenEvent(canvas, ctx);
    // return image.removeEventListener('load', listenEvent(canvas, ctx));
  }, []);

  return (
    <div>
      <canvas id="pixelraincanvas" ref={pixelraincanvas} />
    </div>
  );
};
export default PixelRain;
