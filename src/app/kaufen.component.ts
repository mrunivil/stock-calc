import {
  ChangeDetectionStrategy,
  Component,
  ViewChild
} from "@angular/core";
import {ShareService} from './share.service';
import { NgModel } from "@angular/forms";

@Component({
  providers:[ShareService],
  selector: "app-kaufen",
  templateUrl: "./kaufen.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KaufenComponent {
  @ViewChild("shareCountInput", { static: true })
  shareCountInputRef: NgModel;
  @ViewChild("pricePerShareInput", { static: true })
  pricePerShareInputRef: NgModel;

  constructor(private readonly shareService:ShareService){}

  _shareCount = 0;
  _pricePerShare = 0;

  sharePrice = 0;
  fee = 0;
  totalPrice = 0;

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
    this.totalPrice = this.shareService.calcTotalSharePrice(this.sharePrice, this.fee)
  }
 
}
