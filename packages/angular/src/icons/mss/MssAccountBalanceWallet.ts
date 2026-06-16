import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-account-balance-wallet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssAccountBalanceWallet {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M652-416q25 0 44.5-19.5t19.5-45q0-25.5-19.5-44.5T652-544q-25 0-44.5 19T588-480.5q0 25.5 19.5 45T652-416ZM180-233v53-600 547Zm-60 113v-720h720v194h-60v-134H180v600h600v-133h60v193H120Zm344-546h418v373H464v-373Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssAccountBalanceWallet;
