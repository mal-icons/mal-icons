import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-link-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcLink24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.78 3.65a3.94 3.94 0 1 1 5.57 5.57l-3.63 3.63a3.94 3.94 0 0 1-5.88-0.350.750.75 0 0 0-1.180.93 5.44 5.44 0 0 0 8.120.49l3.63-3.63a5.44 5.44 0 1 0-7.69-7.69l-3 3a0.750.75 0 0 0 1.06 1.06l3-3Z"}],["path",{"d":"M7.28 11.15a3.94 3.94 0 0 1 5.880.350.750.75 0 0 0 1.18-0.93 5.44 5.44 0 0 0-8.12-0.49L2.59 13.72a5.44 5.44 0 1 0 7.69 7.69l3-3a0.750.75 0 1 0-1.06-1.06l-3 3a3.94 3.94 0 0 1-5.57-5.57l3.63-3.63Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcLink24;
