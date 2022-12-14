import { existsSync, mkdirSync, writeFileSync } from "fs";

import {
	createComponentTemplate,
	createHooksTemplate,
	createStyleTemplate,
} from "./templates";

const getArgValue = (arg: string): { name: string; value: string } => {
	const initStr = arg.slice(0, 2);
	if (initStr !== "--") {
		throw new Error("Argument error. Please specify with --.");
	}

	const equalIndex = arg.indexOf("=");
	if (equalIndex === -1) {
		throw new Error(
			"Argument error. Please use the format '--component=atoms --name=ComponentName'."
		);
	}
	const name = arg.slice(2, equalIndex);
	if (name.length === 0) {
		throw new Error("Argument error. No Argument");
	}
	if (name !== "component" && name !== "name") {
		throw new Error(
			"Argument error. Please use the format '--component=atoms --name=ComponentName'."
		);
	}

	const value = arg.slice(equalIndex + 1, arg.length);
	if (value.length === 0) {
		throw new Error("Argument error. Argument value is missing.");
	}

	return { name, value };
};

const validateArgs = (args: string[]) => {
	if (args.length !== 5) {
		throw new Error(
			"Argument error. Incorrect number of arguments. Please use the format '--component=atoms --name=ComponentName'."
		);
	}
};

const main = () => {
	try {
		validateArgs(process.argv);
		const pathName = getArgValue(process.argv[3]);
		const componentName = getArgValue(process.argv[4]);

		const path = `src/components/${pathName.value}/${componentName.value}`;
		if (!existsSync(path)) {
			mkdirSync(path, {
				recursive: true,
			});
		}
		writeFileSync(
			`${path}/index.tsx`,
			createComponentTemplate(componentName.value)
		);
		writeFileSync(`${path}/styles.ts`, createStyleTemplate());
		writeFileSync(`${path}/hooks.ts`, createHooksTemplate(componentName.value));
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error);
	}
};

main();
