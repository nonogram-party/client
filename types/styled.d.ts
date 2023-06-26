import "styled-components";

type TonedColor = {
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
};

type SurfaceColor = {
  body: string;
  paper: string;
};

type TypographyColor = {
  body: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: TonedColor;
      secondary: TonedColor;
      red: TonedColor;
      green: TonedColor;
      black: TonedColor;
      shadow: string;
      background: SurfaceColor;
      text: TypographyColor;
    };
  }
}
