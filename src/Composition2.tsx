import { AbsoluteFill, Sequence } from "remotion";
import { Title } from "./components/Title";
import { DivBottom } from "./components/DivBottom";
import { LottieAnimation } from "./components/LottieAnimation";
import { SideText } from "./components/SideText";

import { z } from "zod";
import { zColor } from "@remotion/zod-types";

export const Composition2Schema = z.object({
	lottieFile: z.string(),
	titleText: z.string(),
	titleColor: zColor(),
	sideText: z.string(),
});

export const Composition2: React.FC<z.infer<typeof Composition2Schema>> = ({
	lottieFile: propThree,
	titleText: propOne,
	titleColor: propTwo,
	sideText: propFour,
}) => {
	return (
		<AbsoluteFill className="bg-gray-100">
			<Sequence from={0} durationInFrames={Infinity} name="Lottie">
				<LottieAnimation lottieFile={propThree} />
			</Sequence>
			<Sequence from={0} durationInFrames={Infinity} name="Text">
				<AbsoluteFill>
					<DivBottom />
				</AbsoluteFill>
				<AbsoluteFill>
					<Title titleText={propOne} titleColor={propTwo} />
				</AbsoluteFill>
			</Sequence>
			<Sequence from={0} durationInFrames={Infinity} name="SideText">
				<SideText sideText={propFour} />
			</Sequence>
		</AbsoluteFill>
	);
};
