import { Composition } from "remotion";
import { MyComposition, MyCompositionSchema } from "./Composition";
import "./style.css";

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="LinkedInPost"
				component={MyComposition}
				durationInFrames={30*10}
				fps={30}
				width={1280}
				height={720}
				schema={MyCompositionSchema}
				defaultProps={{
					titleText: "Leveraging AI for Product Growth: Future Trends and Predictions",
					titleColor: "#FFF",
					backGroundImage: "leveraging-ai-for-product-growth-future-trends-and-predictions.png"
				}}
			/>
		</>
	);
};
