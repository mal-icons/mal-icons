import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-account-balance-wallet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAccountBalanceWallet {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M652-416q25 0 44.5-19.5t19.5-45q0-25.5-19.5-44.5T652-544q-25 0-44.5 19T588-480.5q0 25.5 19.5 45T652-416ZM180-233v53-600 547Zm0 113q-23 0-41.5-18T120-180v-600q0-23 18.5-41.5T180-840h600q24 0 42 18.5t18 41.5v134h-60v-134H180v600h600v-133h60v133q0 24-18 42t-42 18H180Zm358-173q-34 0-54-20t-20-53v-227q0-34 20-53.5t54-19.5h270q34 0 54 19.5t20 53.5v227q0 33-20 53t-54 20H538Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAccountBalanceWallet;
