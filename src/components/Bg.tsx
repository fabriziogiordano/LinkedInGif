import React from "react";
import { Img, staticFile } from "remotion";

export const Bg: React.FC<{
	backGroundImage: string;
}> = ({backGroundImage}) => {
	return <Img src={staticFile(backGroundImage)} />;
};
