"use client";

import React, { InputHTMLAttributes } from "react";
import "./styles/XStepper.css";

type XStepper = InputHTMLAttributes<HTMLInputElement>;
interface StepperProps extends XStepper {
  min: number;
  max: number;
  step: number;
}

const Stepper: React.FC<StepperProps> = ({ min, max, step, ...rest }) => {
  return (
    <div className="flex w-full items-center space-x-4">
      <div>
        <input
          {...rest}
          type="range"
          min={min}
          max={max}
          step={step}
          className="stepper-input h-2 w-full appearance-none rounded-lg bg-emerald-300 text-orange-200 outline-none"
        />
      </div>
      <span className="text-xl font-semibold">{rest.value}</span>
    </div>
  );
};

export default Stepper;
