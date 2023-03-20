import { IRank, Rank } from '../models/Rank.model';

/**
 * @description - Ranks ordering according to issued date and then order number.
 * @param ranks - Ranks Array.
 * @returns - Return Ordered ranks.
 */
export function orderRanks(ranks: Rank[] | IRank[]): Rank[] | IRank[] {
  return [...JSON.parse(JSON.stringify(ranks))].sort((a, b) => {
    const date1 = b.graduated ? new Date(b.graduated) : 0;
    const date2 = a.graduated ? new Date(a.graduated) : 0;
    if (
      a?.martialArt?.order &&
      b?.martialArt?.order &&
      date1 === 0 &&
      date2 === 0
    ) {
      return b.martialArt.order - a.martialArt.order;
    }
    return +date1 - +date2;
  });
}
