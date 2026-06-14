import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-hourglass-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcHourglass16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.75 1h10.5a0.750.75 0 0 1 0 1.5h-0.75v1.25a4.75 4.75 0 0 1-1.9 3.8l-0.330.25a0.250.25 0 0 0 0 0.4l0.330.25a4.75 4.75 0 0 1 1.9 3.8v1.25h0.75a0.750.75 0 0 1 0 1.5H2.75a0.750.75 0 0 1 0-1.5h0.75v-1.25a4.75 4.75 0 0 1 1.9-3.8l0.33-0.25a0.250.25 0 0 0 0-0.4L5.4 7.55a4.75 4.75 0 0 1-1.9-3.8V2.5h-0.75a0.750.75 0 0 1 0-1.5ZM11 2.5H5v1.25c0 1.020.48 1.99 1.3 2.6l0.330.25c0.930.70.93 2.1 0 2.8l-0.330.25a3.25 3.25 0 0 0-1.3 2.6v1.25h6v-1.25a3.25 3.25 0 0 0-1.3-2.6l-0.33-0.25a1.75 1.75 0 0 1 0-2.8l0.33-0.25a3.25 3.25 0 0 0 1.3-2.6Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcHourglass16;
