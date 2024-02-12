import { FC, ReactNode } from "react";
import Paper from "@mui/material/Paper";

interface FoundProps {
  children: ReactNode;
}

const Found: FC<FoundProps> = ({ children }) => {
  const size = 100;

  const height = window.innerWidth;
  const width = window.innerHeight;

  const paperByWidth = Math.floor(width / size);
  const paperByHeight = Math.floor(height / size);

  const papers = [];
  for (let j = 0; j < paperByHeight; j++) {
    for (let i = 0; i < paperByWidth; i++) {
      papers.push(
        <Paper
          key={`${i}-${j}`}
          elevation={i % paperByWidth}
          style={{
            width: size,
            height: size,
            backgroundColor: "#cccccc90",
          }}
        />
      );
    }
  }

  return (
    <div className="relative h-screen w-screen bg-gradient-to-b from-gray-600 to-gray-200">
      <div className="absolute top-0 left-0 w-screen h-screen flex flex-wrap">
        {papers}
      </div>
      <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Found;
