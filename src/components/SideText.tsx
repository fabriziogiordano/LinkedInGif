import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

export const SideText: React.FC<{
	sideText: string;
}> = ({ sideText }) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [20, 40], [0, 1], {extrapolateLeft: "clamp",extrapolateRight: "clamp",});

	return (
		<div
			style={{ opacity, position: "absolute", top: "75px", left: "600px", width: "500px" }}
			className="text-gray-700 text-4xl pl-10 font-bold leading-tight tracking-tighter"
		>
			{sideText}
		</div>
	);
};
