import { UserConfigExport } from "vite";
import pomsky from "./dist";

export default {
	plugins: [
		pomsky.vite({
			flavor: "js",
			includeOriginal: true,
			fileExtensions: [".javascript"],
		}),
	],
	root: "./test",
} as UserConfigExport;
