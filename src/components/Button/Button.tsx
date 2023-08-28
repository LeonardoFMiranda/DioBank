import { MouseEventHandler } from "react";
import './Button.css'
interface ButtonProps {
    text: string;
    className:string;
    onClick: MouseEventHandler;
  }

const Button = ({text,className,onClick }: ButtonProps) => {
  return (
    <>
      <button onClick={onClick} className={className}>{text}</button>
    </>
  );
};

export default Button;
