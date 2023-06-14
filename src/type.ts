export interface CursorConfig {
  size: number;
  zIndex: number;
  blurSize: number;
  spread: string;
  feather: string;
}

export type CursorProps = Partial<CursorConfig>;
