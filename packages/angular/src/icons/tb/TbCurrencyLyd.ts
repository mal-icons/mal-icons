import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-currency-lyd",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCurrencyLyd {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 15h0.01"}],["path",{"d":"M21 5v10a2 2 0 0 1 -2 2h-2.76a2 2 0 0 1 -1.79 -1.11l-0.45 -0.89"}],["path",{"d":"M5 8l2.77 4.69c0.43 0.7 0.23 1.63 -0.43 2.08a1.38 1.38 0 0 1 -0.77 0.24h-2.22a0.93 0.93 0 0 1 -0.67 -0.29l-0.67 -0.71"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCurrencyLyd;
