import colors from "../constants/colors";
import _default from "./default";

const config = {
  ..._default,
  colors: {
    backgroundColor: colors.void,
    fontColor: colors.stark,
    buttonBackground: colors.cyan,
    buttonColor: colors.void,
    shadowColor1: colors.magenta,
    shadowColor2: colors.cyan,
  },
};

export default config;
