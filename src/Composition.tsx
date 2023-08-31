import { AbsoluteFill } from "remotion";
import { Bg } from "./components/Bg";
import { Title } from "./components/Title";
import { DivBottom } from "./components/DivBottom";

import { z } from "zod";
import { zColor } from "@remotion/zod-types";

export const Composition1Schema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	backGroundImage: z.string(),
});

export const Composition1: React.FC<z.infer<typeof Composition1Schema>> = ({
	titleText: propOne,
	titleColor: propTwo,
	backGroundImage: propThree,
}) => {
	return (
		<AbsoluteFill className="bg-gray-100">
			<AbsoluteFill>
				<Bg backGroundImage={propThree} />
			</AbsoluteFill>
			<AbsoluteFill>
				<DivBottom />
			</AbsoluteFill>
			<AbsoluteFill>
				<Title titleText={propOne} titleColor={propTwo} />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
