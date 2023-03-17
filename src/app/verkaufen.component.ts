import { ChangeDetectionStrategy, Component, ViewChild } from "@angular/core";
import { NgModel } from "@angular/forms";
import { ShareService } from "./share.service";

@Component({
  providers: [ShareService],
  selector: "app-verkaufen",
  templateUrl: './verkaufen.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerkaufenComponent {
  @ViewChild("shareCountInput", { static: true })
  shareCountInputRef: NgModel;
  @ViewChild("pricePerShareInput", { static: true })
  pricePerShareInputRef: NgModel;

  constructor(private readonly shareService:ShareService){}
  
  _sharePayed = 0;
  _shareCount = 0;
  _pricePerShare = 0;

  sharePrice = 0;
  fee = 0;
  earnings = 0;
  yield = 0;

  public set sharePayed(v: number) {
    this._sharePayed = v;
    this.calculateValues();
  }
  public get sharePayed(): number {
    return this._sharePayed;
  }
  public set shareCount(v: number) {
    this._shareCount = v;
    this.calculateValues();
  }
  public get shareCount(): number {
    return this._shareCount;
  }
  public set pricePerShare(v: number) {
    this._pricePerShare = v;
    this.calculateValues();
  }
  public get pricePerShare(): number {
    return this._pricePerShare;
  }

  private calculateValues():void{
    let valid = true;
    valid &&= !this.shareCountInputRef.errors;
    valid &&= !this.pricePerShareInputRef.errors;
    if(!valid) return

    this.sharePrice = this.shareService.calcSharePrice(this.shareCount, this.pricePerShare)
    this.fee = this.shareService.calcFee(this.sharePrice)
    this.earnings = this.shareService.calcShareEarnings(this.sharePrice,this.sharePayed,this.fee)
    this.yield = this.shareService.calcYield(this.earnings,this.sharePayed)
  }
}
