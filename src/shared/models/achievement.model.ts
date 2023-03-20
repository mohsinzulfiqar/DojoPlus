export interface Achievement {
  __typename?: string;
  _description: string;
  beltLevel: string;
  championship: string;
  createdAt: string;
  createdBy: string;
  gender: string;
  id: number;
  location: string;
  month: number;
  name: string;
  rank: number;
  updatedAt: string;
  weight: string;
  year: number;
  eventNameFromEventName: string[];
  medal: { url: string }[];
  martialArtFromBeltLevel: string[];
  weightDivision?: string;
  ageDivision?: string;
  rankLevelFromMartialArtsLevels: string[];
  verified: boolean | undefined | null;
}
