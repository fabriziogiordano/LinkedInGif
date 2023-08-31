import React from "react";
import { Img, staticFile } from "remotion";

export const Bg: React.FC<{}> = ({}) => {
	return (
		<Img
			src={staticFile(
				"leveraging-ai-for-product-growth-future-trends-and-predictions.png"
			)}
		/>
	);
};
