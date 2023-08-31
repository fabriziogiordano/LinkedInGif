import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const Title: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({ titleText, titleColor }) => {
	const frame = useCurrentFrame();

	const { height, fps } = useVideoConfig();

	const opacity = interpolate(frame, [20, 40], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	const entrance = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 30,
	});

	const entranceOffset = interpolate(entrance, [0, 1], [height, height - 136]);

	return (
		<div
			style={{ opacity, color: titleColor, transform: `translateY(${entranceOffset}px)` }}
			className="text-gray-700 text-5xl pl-10 font-bold leading-tight tracking-tighter"
		>
			{titleText}
		</div>
	);
};
