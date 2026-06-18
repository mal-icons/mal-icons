import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-currency-dinar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCurrencyDinar {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 20.01v-0.01"}],["path",{"d":"M6 13l2.39 -0.9a1 1 0 0 0 -0.09 -1.9l-1.51 -0.4a1 1 0 0 1 -0.1 -1.9l2.33 -0.89"}],["path",{"d":"M3 14v1a3 3 0 0 0 3 3h4.16a3 3 0 0 0 2.98 -3.32l-1.14 -10.68"}],["path",{"d":"M16 17l1 1h2a2 2 0 0 0 1.65 -3.13l-2.65 -3.87"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCurrencyDinar;
