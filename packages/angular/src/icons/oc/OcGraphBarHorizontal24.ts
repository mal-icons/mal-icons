import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-graph-bar-horizontal-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcGraphBarHorizontal24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.88 22.13H1.13q-0.31 0-0.53-0.22-0.22-0.22-0.22-0.53 0-0.310.22-0.530.22-0.220.53-0.22h21.75q0.31 0 0.530.220.220.220.220.53 0 0.31-0.220.53-0.220.22-0.530.22Z"}],["path",{"d":"M3.25 10.5h4a0.250.25 0 0 1 0.250.25v10a0.250.25 0 0 1-0.250.25h-4a0.250.25 0 0 1-0.25-0.25v-10a0.250.25 0 0 1 0.25-0.25Zm6-6h4a0.250.25 0 0 1 0.250.25v16a0.250.25 0 0 1-0.250.25h-4a0.250.25 0 0 1-0.25-0.25v-16a0.250.25 0 0 1 0.25-0.25Zm6 9h4a0.250.25 0 0 1 0.250.25v7a0.250.25 0 0 1-0.250.25h-4a0.250.25 0 0 1-0.25-0.25v-7a0.250.25 0 0 1 0.25-0.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcGraphBarHorizontal24;
