import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-heart-fill-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcHeartFill16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.66 14.92v0h0l-0.010-0.02-0.01a22.07 22.07 0 0 1-3.74-2.58C2.05 10.73 0 8.35 0 5.5 0 2.84 2.09 1 4.25 1 5.8 1 7.15 1.8 8 3.02 8.85 1.8 10.2 1 11.75 1 13.91 1 16 2.84 16 5.5c0 2.85-2.04 5.23-3.89 6.82a22.09 22.09 0 0 1-3.43 2.41 7.15 7.15 0 0 1-0.310.17l-0.020.01-0.010a0.750.75 0 0 1-0.69 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcHeartFill16;
