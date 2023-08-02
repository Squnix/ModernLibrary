export enum themesList { 
  "dark" = "dark",
  "light" = "light", 
  "orange" = "orange",
};

export type themeValues = keyof typeof themesList;
