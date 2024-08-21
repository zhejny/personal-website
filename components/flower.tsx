"use client";
import React, { useEffect, useRef } from "react";
import { Petal } from "./flower-petal";

const Flower: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const { current: canvas } = canvasRef;
    const totalPetals = Math.floor(36 + Math.random() * 18);
    let flowerColor: number[] = [];
    for (var i = 0; i < 3; i++) {
      flowerColor.push(255 * Math.random());
    }
    let petals: Petal[] = [];
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");

    if (context) {
      for (let i = 0; i < totalPetals; i++) {
        petals.push(
          new Petal(canvas.width, canvas.height, i, totalPetals, flowerColor)
        );
      }

      const animate = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        petals.forEach((petal) => {
          petal.draw(context);
          petal.update();
        });
        window.requestAnimationFrame(animate);
      };
      animate();
    }
  }, []);
  return <canvas ref={canvasRef} />;
};

export default Flower;
