import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-graph-bar-vertical-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcGraphBarVertical24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.88 22.88V1.13q0-0.310.22-0.530.22-0.220.53-0.220.31 0 0.530.220.220.220.220.53v21.75q0 0.31-0.220.53-0.220.22-0.530.22-0.31 0-0.53-0.22-0.22-0.22-0.22-0.53Z"}],["path",{"d":"M13.5 4.75v4a0.250.25 0 0 1-0.250.25h-10A0.250.25 0 0 1 3 8.75v-4a0.250.25 0 0 1 0.25-0.25h10a0.250.25 0 0 1 0.250.25Zm6 6v4a0.250.25 0 0 1-0.250.25h-16a0.250.25 0 0 1-0.25-0.25v-4a0.250.25 0 0 1 0.25-0.25h16a0.250.25 0 0 1 0.250.25Zm-9 6v4a0.250.25 0 0 1-0.250.25h-7a0.250.25 0 0 1-0.25-0.25v-4a0.250.25 0 0 1 0.25-0.25h7a0.250.25 0 0 1 0.250.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcGraphBarVertical24;
