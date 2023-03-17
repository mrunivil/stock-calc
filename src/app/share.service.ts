import { Injectable } from "@angular/core";

export type ShareSettings = {
  basicFee: number;
  tradeFee: number;
  provisionMin: number;
  provision: number;
  provisionMax: number;
};

export const DefaultShareSettings: ShareSettings = {
  basicFee: 4.95,
  tradeFee: 1.5,
  provisionMin: 9.95,
  provision: 0.0025,
  provisionMax: 69.0
};

@Injectable()
export class ShareService {
  settings: ShareSettings = DefaultShareSettings;

  calcSharePrice(shareCount: number, pricePerShare: number): number {
    return shareCount * pricePerShare;
  }
  calcFee(totalSharePriceNetto: number): number {
    const {
      basicFee,
      tradeFee,
      provisionMin,
      provision,
      provisionMax
    } = this.settings;
    return Math.min(
      Math.max(
        provisionMin,
        basicFee + tradeFee + provision * totalSharePriceNetto
      ),
      provisionMax
    );
  }
  calcTotalSharePrice(totalSharePriceNetto: number, fee: number): number {
    return totalSharePriceNetto + fee;
  }
  calcShareEarnings(
    balance: number,
    originalPrice: number,
    fee: number
  ): number {
    return balance - fee - originalPrice;
  }
  calcYield(balance: number, payed: number): number {
    return balance / payed;
  }
}
