import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-arrow-up-right-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcArrowUpRight16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.53 4.75A0.750.75 0 0 1 5.28 4h6.01a0.750.75 0 0 1 0.750.75v6.01a0.750.75 0 0 1-1.5 0v-4.2l-5.26 5.26a0.750.75 0 0 1-1.27-0.330.750.75 0 0 1 0.22-0.73L9.48 5.5h-4.2a0.750.75 0 0 1-0.75-0.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcArrowUpRight16;
