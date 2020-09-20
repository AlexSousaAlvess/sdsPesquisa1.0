export type GamePlatform = "XBOX" | "PC" | "PLAYSTATION";

export type Game = {
  id: number;
  title: string;
  platform: GamePlatform;
  label: string;
  value: number;
};
