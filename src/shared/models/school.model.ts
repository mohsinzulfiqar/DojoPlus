export interface SchoolSchedules {
  __typename?: 'School';
  id: string | null | undefined;
  recordId: string;
  phone: string | null | undefined;
  schoolName: string | null | undefined;
  email: string | null | undefined;
  schoolPhoneType: string | null | undefined;
  phoneType: string | null | undefined;
  address1: string | null | undefined;
  fullAddress: string | null | undefined;
  address: string | null | undefined;
  state: string | null | undefined;
  city: string | null | undefined;
  zip: string | null | undefined;
  schoolLogo:
    | { __typename?: 'File'; url: string | null | undefined }[]
    | null
    | undefined;
  scheduleSchool: Array<Schedule>;
  plans: Array<Product>;
  schoolProductRelation:
    | { __typename?: 'ProductListResponse'; count: number }
    | null
    | undefined;
}

export interface Schedule {
  __typename?: 'Schedule';
  id: string | null | undefined;
  className: string | null | undefined;
  martialArtLookup: string[] | null | undefined;
  instructorLookup: string[] | null | undefined;
  name: string | null | undefined;
  startTime: string | null | undefined;
  endTime: string | null | undefined;
  room: string | null | undefined;
  weekday: string | null | undefined;
  idProfile:
    | {
        __typename?: 'Profile';
        firstName: string | null | undefined;
        lastName: string | null | undefined;
      }
    | null
    | undefined;
  idMartialArt:
    | { __typename?: 'MartialArt'; name: string | null | undefined }
    | null
    | undefined;
}

export type Product = {
  currency: string | null | undefined;
  frequency: string | null | undefined;
  planDescription: string | null | undefined;
  planName: string | null | undefined;
  price: number | null | undefined;
  school: string[] | null | undefined;
  schoolNameFromSchool: string[] | null | undefined;
  type: string | null | undefined;
  lookupKey: string;
  feesLookupKey: string;
  stripePriceId: string | null | undefined;
  setupFee: number | null | undefined;
};
