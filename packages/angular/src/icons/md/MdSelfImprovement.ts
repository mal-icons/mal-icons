import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-self-improvement",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdSelfImprovement {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"6","r":"2"}],["path",{"d":"M21 16v-2c-2.24 0-4.16-0.96-5.6-2.68l-1.34-1.6A1.98 1.98 0 0 0 12.53 9h-1.05c-0.59 0-1.150.26-1.530.72l-1.34 1.6C7.16 13.04 5.24 14 3 14v2c2.77 0 5.19-1.17 7-3.25V15l-3.88 1.55c-0.670.27-1.120.93-1.12 1.66C5 19.2 5.8 20 6.79 20H9v-0.5a2.5 2.5 0 0 1 2.5-2.5h3c0.28 0 0.50.220.50.5s-0.220.5-0.50.5h-3c-0.83 0-1.50.67-1.5 1.5v0.5h7.21c0.99 0 1.79-0.8 1.79-1.79 0-0.73-0.45-1.39-1.12-1.66L14 15v-2.25c1.81 2.08 4.23 3.25 7 3.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdSelfImprovement;
