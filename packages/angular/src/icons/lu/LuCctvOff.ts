import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-cctv-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuCctvOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m12.31 6.65 4.8 2.4a1 1 0 0 1 0.45 1.34l-0.5 10.610.61h2.73a1 1 0 0 1 0.89 1.45l-0.72 1.45"}],["path",{"d":"m15.17 15.17-0.72 1.44a1 1 0 0 1-1.340.45L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.9 2.9 0 0 1 0.87-1.04"}],["path",{"d":"M2 19h3.76a2 2 0 0 0 1.8-1.1l1.44-2.9"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M2 21v-4"}],["path",{"d":"M7 9h0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuCctvOff;
