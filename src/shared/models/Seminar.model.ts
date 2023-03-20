export interface SeminarData {
  eventTitle: string | null | undefined;
  priceMembers: string | null | undefined;
  address: string | null | undefined;
  startDate: string | null | undefined;
  coverImage:
    | [
        {
          url: string | null | undefined;
        },
      ]
    | null
    | undefined;
}

export interface SeminarsData {
  seminars: [] | null | undefined;
}
