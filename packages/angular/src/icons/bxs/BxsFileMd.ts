import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-file-md",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsFileMd {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.48 14.02c-0.24 0-0.390.02-0.480.04v3.09c0.090.020.240.020.370.020.970.01 1.6-0.52 1.6-1.650.01-0.98-0.57-1.5-1.48-1.5z"}],["path",{"d":"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-2.93 15.95-0.07-1.81a53.14 53.14 0 0 1-0.04-1.94h-0.02a26.1 26.1 0 0 1-0.52 1.83l-0.57 1.84H9l-0.5-1.83a22 22 0 0 1-0.43-1.84h-0.01c-0.030.64-0.05 1.37-0.08 1.95l-0.08 1.79h-0.99L7.2 13.23h1.42l0.46 1.58c0.150.550.3 1.140.4 1.69h0.02a39.87 39.87 0 0 1 0.45-1.69l0.5-1.57h1.39l0.26 4.72h-1.04zm5.25-0.56c-0.50.41-1.250.61-2.180.61a9.27 9.27 0 0 1-1.21-0.07v-4.64a9.54 9.54 0 0 1 1.44-0.1c0.9 0 1.480.16 1.930.510.490.360.80.950.8 1.78 0 0.9-0.33 1.53-0.78 1.91zM14 9h-1V4l5 5h-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsFileMd;
