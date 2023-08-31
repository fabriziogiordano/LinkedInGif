import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const DivBottom: React.FC<{}> = ({}) => {
	const frame = useCurrentFrame();
	const { height, fps } = useVideoConfig();

	const entrance = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 30,
	});

	const entranceOffset = interpolate(entrance, [0, 1], [height, height-150]);

	return (
		<div
			style={{ transform: `translateY(${entranceOffset}px)` }}
			className="w-full h-[150px] bg-black"
		/>
	);
};
