import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-currency-yen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCurrencyYen {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.82 3c0.34 0 0.660.170.840.46L12 10.29l4.34-6.83c0.18-0.290.5-0.460.84-0.460.79 0 1.270.870.84 1.54L13.92 11H17c0.55 0 1 0.45 1 1s-0.45 1-1 1h-4v2h4c0.55 0 1 0.45 1 1s-0.45 1-1 1h-4v3c0 0.55-0.45 1-1 1s-1-0.45-1-1v-3H7c-0.55 0-1-0.45-1-1s0.45-1 1-1h4v-2H7c-0.55 0-1-0.45-1-1s0.45-1 1-1h3.08l-4.1-6.46A11 0 0 1 6.82 3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCurrencyYen;
