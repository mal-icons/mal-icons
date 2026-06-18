import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-flight-takeoff-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFlightTakeoffLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.95 10.11C22.16 10.91 21.69 11.73 20.89 11.95L5.22 16.15C4.78 16.27 4.31 16.07 4.09 15.67L1.47 10.94L2.91 10.55L5.38 13L10.48 11.63L5.97 4.56L7.9 4.04L14.85 10.46L20.11 9.05C20.91 8.84 21.73 9.31 21.95 10.11ZM4 19H20V21H4V19Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFlightTakeoffLine;
