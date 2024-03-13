"use client";
import React, { useState } from "react";
interface StepperProps {
  min: number;
  max: number;
  step: number;
}

import "./styles/XStepper.css";

const Stepper: React.FC<StepperProps> = ({ min, max, step }) => {
  const [value, setValue] = useState(min);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value));
  };

  return (
    <div className="flex w-full items-center space-x-4">
      <div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="stepper-input h-2 w-full appearance-none rounded-lg bg-emerald-300 text-orange-200 outline-none"
        />
      </div>
      <span className="text-xl font-semibold">{value}</span>
    </div>
  );
};

export default Stepper;
