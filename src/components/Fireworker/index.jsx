// based on https://codepen.io/judag/pen/XmXMOL

import React, { useEffect, useState } from 'react';

import Particle from './Particle';
import FireworksService from '../../services/fireworking';

//
export default function Fireworker() {
  const [particles] = useState([]);
  const [probability] = useState(0.04);
  // timer id's for cleanup
  const [cleanupTimerId, setCleanupTimerId] = useState(null);
  // id of animation frame
  const [animationFrameId, setAnimationFrameId] = useState(null);
  //
  const [isFireworking, setIsFireworking] = useState(false);

  //
  const cleanAnimationFrame = () => {
    // If the previous animation frame is set then cleaning it
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      setAnimationFrameId(null);
    }
  };

  //
  const stopFireworks = () => {
    setIsFireworking(false);

    // Cleaning animation frame
    cleanAnimationFrame();
  };

  //
  const onDoFireworks = (time) => {
    // If the previous timer is set then cleaning it
    if (cleanupTimerId) {
      clearTimeout(cleanupTimerId);
      setCleanupTimerId(null);
    }
    // Cleaning animation frame
    cleanAnimationFrame();

    // Starting fireworks
    setIsFireworking(true);

    // Setting the timer to finish the fireworks
    const timerId = setTimeout(() => {
      stopFireworks();
      setCleanupTimerId(null);
    }, time);
    setCleanupTimerId(timerId);
  };

  // registering callback function for fireworks
  FireworksService.onDoFireworks = onDoFireworks;

  //
  const onFireworksClick = () => {
    stopFireworks();

    clearTimeout(cleanupTimerId);
    setCleanupTimerId(null);
  };

  //
  const resizeCanvas = () => {
    const canvas = document.getElementById('fireworksCanvas');
    if (canvas) {
      const newW = window.innerWidth;
      canvas.width = newW;
      const newH = window.innerHeight;
      canvas.height = newH;
    }
  };

  //
  const createFirework = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    const xPoint = Math.random() * (w - 200) + 100;
    const yPoint = Math.random() * (h - 200) + 100;
    const nFire = Math.random() * 50 + 100;
    // eslint-disable-next-line no-bitwise
    const c = `rgb(${(~~(Math.random() * 200 + 55))},${(~~(Math.random() * 200 + 55))},${(~~(Math.random() * 200 + 55))})`;
    for (let i = 0; i < nFire; i += 1) {
      const particle = new Particle(xPoint, yPoint);
      particle.color = c;
      const vy = Math.sqrt(25 - particle.vx * particle.vx);
      if (Math.abs(particle.vy) > vy) {
        particle.vy = particle.vy > 0 ? vy : -vy;
      }
      particles.push(particle);
    }
  };

  //
  const update = () => {
    if (particles.length < 500) {
      const r = Math.random();
      if (r < probability) createFirework();
    }
    const alive = [];
    for (let i = 0; i < particles.length; i += 1) {
      if (particles[i].move()) {
        alive.push(particles[i]);
      }
    }
    particles.length = 0;
    particles.push(...alive);
  };

  //
  const paint = () => {
    //
    const canvas = document.getElementById('fireworksCanvas');
    if (canvas) {
      //
      const ctx = canvas.getContext('2d');
      if (ctx) {
        //
        ctx.globalCompositeOperation = 'source-over';
        //
        const w = window.innerWidth;
        const h = window.innerHeight;
        ctx.clearRect(0, 0, w, h);
        //
        ctx.globalCompositeOperation = 'lighter';
        for (let i = 0; i < particles.length; i += 1) {
          particles[i].draw(ctx);
        }
      }
    }
  };

  //
  const updateWorld = () => {
    update();
    paint();
    requestAnimationFrame(updateWorld);
  };

  //
  useEffect(() => {
    // Starting fireworks
    if (isFireworking) {
      resizeCanvas();
      requestAnimationFrame(updateWorld);
    }
  }, [isFireworking]);

  //
  useEffect(() => () => {
    // If the previous timer is set then cleaning it
    if (cleanupTimerId) {
      clearTimeout(cleanupTimerId);
      setCleanupTimerId(null);
    }

    // Cleaning animation frame
    cleanAnimationFrame();

    // Cleaning the callback
    FireworksService.onDoFireworks = null;
  }, []);

  return isFireworking
    ? (
      <div
        id="fireworks"
        role="presentation"
        onClick={() => onFireworksClick()}
        onKeyUp={() => onFireworksClick()}
      >
        <canvas id="fireworksCanvas" />
      </div>
    )
    : '';
}
