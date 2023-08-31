import React from "react";
import { interpolate, useCurrentFrame, Sequence } from "remotion";

export const SideBulletPoints: React.FC<{
	sideTextList: string;
}> = ({ sideTextList }) => {
	const frame = useCurrentFrame();

	const AllSeQuences = sideTextList.split("\n").slice(1,-1).map((el, i) => {
		const delay = i * 60;
		const opacity = interpolate(frame, [20 + delay, 40 + delay], [0, 1], {extrapolateLeft: "clamp",extrapolateRight: "clamp",});
		return (
			<Sequence
				style={{ opacity, position: "absolute", backgroundColor: i % 2 ? "green" : "red", top: `${i*3}rem` }}
				from={delay}
				durationInFrames={Infinity}
				name={`Sequence-${i}`}
			>
				→ {el}
			</Sequence>
		);
	});

	return (
		<div
			style={{ position: "absolute", top: "75px", left: "600px", width: "500px" }}
			className="text-gray-700 text-4xl pl-10 font-bold leading-tight tracking-tighter"
		>
			{AllSeQuences}
			{/* {sideText} */}
		</div>
	);
};
