/* eslint-disable react/no-this-in-sfc */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
import React, { useEffect, useRef } from 'react';
import { thumbsUp } from './images64';

const PixelFire = () => {
  const pixelFire = useRef();

  const image = new Image();
  const listenEvent = (canvas, ctx) => {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
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
        this.angle = 0;
      }

      update() {
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
        if (
          mappedImage[this.position1] &&
          mappedImage[this.position1][this.position2]
        ) {
          this.speed = mappedImage[this.position1][this.position2][0];
        }
        const movement = 2.5 - this.speed + this.velocity;
        this.angle += this.speed / 50;
        this.size = this.speed * 0.9;
        // ctx.globalCompositeOperation = 'soft-light'
        // ctx.globalCompositeOperation = 'luminosity'
        // ctx.globalCompositeOperation = 'lighter

        this.y -= movement;
        this.x += movement + Math.sin(this.angle) * 2;
        if (this.y <= 0) {
          this.y = canvas.height;
          this.x = Math.random() * canvas.width;
        }
        if (this.x >= canvas.width) {
          this.x = 0;
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        ctx.beginPath();
        if (
          mappedImage[this.position1] &&
          mappedImage[this.position1][this.position2]
        ) {
          ctx.fillStyle = mappedImage[this.position1][this.position2][1];
        }
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
      ctx.globalAlpha = 0.05;
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 0.2;
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        ctx.globalAlpha = particlesArray[i].speed * 0.5;
        particlesArray[i].draw();
      }
      if (!pixelFire.current) return;
      requestAnimationFrame(animate);
    };
    animate();
  };

  useEffect(() => {
    image.src = thumbsUp;
    const canvas = document.getElementById('pixelFire');
    const ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 300;
    listenEvent(canvas, ctx);
  }, []);

  return (
    <div>
      <canvas id="pixelFire" ref={pixelFire} />
    </div>
  );
};
export default PixelFire;
