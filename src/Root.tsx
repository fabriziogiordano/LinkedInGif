import { Composition, Folder } from "remotion";
import { Composition1, Composition1Schema } from "./Composition";
import { Composition2, Composition2Schema } from "./Composition2";
import { Composition3, Composition3Schema } from "./Composition3";
import "./style.css";

export const RemotionRoot: React.FC = () => {
	return (
		<>
			
				<Composition
					id="LinkedInPost-1"
					component={Composition1}
					durationInFrames={30 * 10}
					fps={30}
					width={1200}
					height={644}
					schema={Composition1Schema}
					defaultProps={{
						titleText: "Leveraging AI for Product Growth: Future Trends and Predictions",
						titleColor: "#FFF",
						backGroundImage: "leveraging-ai-for-product-growth-future-trends-and-predictions.png",
					}}
				/>

				<Composition
					id="LinkedInPost-2"
					component={Composition2}
					durationInFrames={30 * 10}
					fps={30}
					width={1200}
					height={644}
					schema={Composition2Schema}
					defaultProps={{
						lottieFile: "animation_llzodmr4.json",
						titleText: "Leveraging AI for Product Growth: Future Trends and Predictions",
						titleColor: "#FFF",
						sideText: "Leveraging AI for Product Growth: Future Trends and Predictions Leveraging AI for Product Growth: Future Trends and Predictions Leveraging AI for Product Growth: Future Trends and Predictions",
					}}
				/>

				<Composition
					id="LinkedInPost-3"
					component={Composition3}
					durationInFrames={30 * 10}
					fps={30}
					width={1200}
					height={644}
					schema={Composition3Schema}
					defaultProps={{
						lottieFile: "animation_llzodmr4.json",
						titleText: "Leveraging AI for Product Growth: Future Trends and Predictions",
						titleColor: "#FFF",
						sideTextList: `
						📈 Predictive Analysis
						🧠 Rapid Prototyping
						🌱 Intelligent Products
						📊 Real-Time Analytics
						`,
					}}
				/>
				<Folder name="empty">
			</Folder>
		</>
	);
};
