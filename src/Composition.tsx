import { AbsoluteFill } from "remotion";
import { Bg } from "./components/Bg";
import { Title } from "./components/Title";
import { DivBottom } from "./components/DivBottom";

import { z } from "zod";
import { zColor } from "@remotion/zod-types";

export const MyCompositionSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
});

export const MyComposition: React.FC<z.infer<typeof MyCompositionSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,
}) => {
	return (
		<AbsoluteFill className="bg-gray-100">
			<AbsoluteFill>
				<Bg />
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
