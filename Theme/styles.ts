import { mode, Styles } from "@chakra-ui/theme-tools";

const styles: Styles = {
	global: (props: any) => ({
		body: {
			fontFamily: "Quicksand,sans-serif",
			bg: mode("#161618", "#161618")(props),
		},
	}),
};

export default styles;
