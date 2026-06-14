import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-graph-bar-vertical-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcGraphBarVertical16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 15.25V0.75q0-0.310.22-0.530.22-0.220.53-0.220.31 0 0.530.220.220.220.220.53v14.5q0 0.31-0.220.53-0.220.22-0.530.22-0.31 0-0.53-0.22-0.22-0.22-0.22-0.53Z"}],["path",{"d":"M9 3.25v2.5a0.250.25 0 0 1-0.250.25h-6.5A0.250.25 0 0 1 2 5.75v-2.5A0.250.25 0 0 1 2.25 3h6.5a0.250.25 0 0 1 0.250.25Zm4 4v2.5a0.250.25 0 0 1-0.250.25H2.25A0.250.25 0 0 1 2 9.75v-2.5A0.250.25 0 0 1 2.25 7h10.5a0.250.25 0 0 1 0.250.25Zm-6 4v2.5a0.250.25 0 0 1-0.250.25h-4.5a0.250.25 0 0 1-0.25-0.25v-2.5a0.250.25 0 0 1 0.25-0.25h4.5a0.250.25 0 0 1 0.250.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcGraphBarVertical16;
