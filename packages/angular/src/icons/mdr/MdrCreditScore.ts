import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-credit-score",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCreditScore {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 4H4c-1.11 0-1.990.89-1.99 2L2 18c0 1.110.89 2 2 2h4c0.55 0 1-0.45 1-1s-0.45-1-1-1H4v-6h18V6c0-1.1-0.9-2-2-2zm0 4H4V6h16v2zm-5.07 11.17-2.12-2.12a11 0 1 0-1.41 1.41l2.83 2.83c0.390.39 1.020.39 1.41 0l5.66-5.66a11 0 1 0-1.41-1.41l-4.96 4.95z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCreditScore;
