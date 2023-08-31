import { AbsoluteFill, Sequence } from "remotion";
import { Title } from "./components/Title";
import { DivBottom } from "./components/DivBottom";
import { LottieAnimation } from "./components/LottieAnimation";
import { SideBulletPoints } from "./components/SideBulletPoints";

import { z } from "zod";
import { zColor } from "@remotion/zod-types";

export const Composition3Schema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	lottieFile: z.string(),
	sideTextList: z.string(),
});

export const Composition3: React.FC<z.infer<typeof Composition3Schema>> = ({
	titleText: propOne,
	titleColor: propTwo,
	lottieFile: propThree,
	sideTextList: propFive,
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
				<SideBulletPoints sideTextList={propFive} />
			</Sequence>
		</AbsoluteFill>
	);
};
