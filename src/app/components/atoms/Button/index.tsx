// src/components/atoms/ButtonComponent.tsx
"use client";

import React from "react";
import { Button } from "antd";

interface ButtonComponentProps {
  onClick: () => void;
  label: string;
  loading?: boolean;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  onClick,
  label,
}) => {
  return (
    <Button type="primary" onClick={onClick}>
      {label}
    </Button>
  );
};

export default ButtonComponent;
