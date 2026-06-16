import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-currency-rupee",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCurrencyRupee {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.5 14h-0.73l5.1 5.31c0.610.640.16 1.69-0.72 1.69-0.27 0-0.53-0.11-0.72-0.31L7.4 14.41c-0.26-0.26-0.4-0.62-0.4-0.98 0-0.790.64-1.43 1.43-1.43h2.07c1.76 0 3.22-1.3 3.46-3H7c-0.55 0-1-0.45-1-1s0.45-1 1-1h6.66c-0.56-1.18-1.76-2-3.16-2H7c-0.55 0-1-0.45-1-1s0.45-1 1-1h10c0.55 0 1 0.45 1 1s-0.45 1-1 1h-2.26c0.480.580.84 1.26 1.05 2H17c0.55 0 1 0.45 1 1s-0.45 1-1 1h-1.02c-0.26 2.8-2.62 5-5.48 5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCurrencyRupee;
