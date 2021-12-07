import * as React from "react";
import { RefAttributes } from "react";
import { Wrapper } from "./VideoSourceStyles";

export const VideoSrc: React.ForwardRefExoticComponent<{ update?: () => void } & RefAttributes<HTMLVideoElement>> =
  React.forwardRef<HTMLVideoElement>((props, ref) => {
    const update = (props as any).update;

    return (
      <Wrapper
        ref={ref}
        onPlay={update}
        src="C:/Users/Junior/Desktop/7 days of blender/Introduction to Blender 3D.mp4"
        autoPlay
      />
    );
  });
