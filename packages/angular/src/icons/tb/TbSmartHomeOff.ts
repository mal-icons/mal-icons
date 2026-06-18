import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-smart-home-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSmartHomeOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.1 7.13l-2.04 1.59a2.67 2.67 0 0 0 -1.03 2.11v7.2a2 2 0 0 0 2 2h12c0.56 0 1.06 -0.23 1.43 -0.6m0.57 -3.42v-5.18c0 -0.82 -0.38 -1.6 -1.03 -2.1l-5.33 -4.15a2.67 2.67 0 0 0 -3.27 0l-1.03 0.8"}],["path",{"d":"M15.33 15.35c-2.21 0.98 -5.33 0.86 -7.33 -0.34"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSmartHomeOff;
