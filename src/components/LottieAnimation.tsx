import { Lottie, LottieAnimationData } from "@remotion/lottie";
import { useEffect, useState } from "react";
import {
	cancelRender,
	continueRender,
	delayRender,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
	interpolate,
	spring,
} from "remotion";

export const LottieAnimation: React.FC<{
	lottieFile: string;
}> = ({ lottieFile }) => {
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
  const ratio = 360/640;

	const width = interpolate(entrance, [0, 1], [1200, 600]);
	const top = interpolate(entrance, [0, 1], [0, 75]);

	const [handle] = useState(() => delayRender("Loading Lottie animation"));

	const [animationData, setAnimationData] = useState<LottieAnimationData | null>(null);

	useEffect(() => {
		fetch(staticFile(lottieFile))
			.then((data) => data.json())
			.then((json) => {
				setAnimationData(json);
				continueRender(handle);
			})
			.catch((err) => {
				cancelRender(err);
			});
	}, [handle]);

	if (!animationData) {
		return null;
	}

	return (
		<Lottie
			style={{
        position:"absolute", top: `${top}px`, width: `${width}px`, height: `${width*ratio}px`,
        // transform: `translateY(${entranceOffset}px)`
      }}
			animationData={animationData}
			loop={true}
		/>
	);
};
