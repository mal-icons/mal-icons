import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-arrow-down-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcArrowDown24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.97 13.22a0.750.75 0 0 1 1.06 0L11 18.19V3.75a0.750.75 0 0 1 1.5 0v14.44l4.97-4.97a0.750.75 0 0 1 1.270.330.750.75 0 0 1-0.210.73l-6.25 6.25a0.750.75 0 0 1-1.06 0l-6.25-6.25a0.750.75 0 0 1 0-1.06Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcArrowDown24;
