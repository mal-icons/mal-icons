import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-emergency-share",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrEmergencyShare {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 9c-3.15 0-6 2.41-6 6.15 0 2.35 1.78 5.11 5.34 8.270.370.330.950.33 1.33 0C16.22 20.25 18 17.5 18 15.15 18 11.41 15.15 9 12 9zm0 7.5c-0.83 0-1.5-0.67-1.5-1.5s0.67-1.5 1.5-1.5 1.50.67 1.5 1.5-0.67 1.5-1.5 1.5zm4.18-9.68c-0.350.35-0.890.38-1.30.09C14.07 6.34 13.07 6 12 6s-2.070.34-2.880.91c-0.410.28-0.950.26-1.3-0.09-0.43-0.43-0.39-1.150.09-1.5C9.06 4.49 10.48 4 12 4s2.940.49 4.09 1.32c0.490.350.52 1.070.09 1.5zM4.97 3.97c-0.42-0.43-0.38-1.120.08-1.5C6.950.93 9.37 0 12.01 0c2.64 0 5.060.93 6.95 2.480.460.380.5 1.070.08 1.49-0.360.36-0.930.39-1.320.07a9.03 9.03 0 0 0-11.43 0c-0.390.32-0.960.28-1.32-0.07z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrEmergencyShare;
