import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-room-preferences",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrRoomPreferences {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.75 17c0-0.22-0.03-0.42-0.06-0.63l0.84-0.73c0.18-0.160.22-0.420.1-0.63l-0.59-1.02a0.490.49 0 0 0-0.59-0.22l-1.060.36c-0.32-0.27-0.68-0.48-1.08-0.63l-0.22-1.09a0.50.5 0 0 0-0.49-0.4h-1.18c-0.24 0-0.440.17-0.490.4l-0.22 1.09c-0.40.15-0.760.36-1.080.63l-1.06-0.36a0.50.5 0 0 0-0.590.22l-0.59 1.02c-0.120.21-0.080.470.10.63l0.840.73c-0.030.21-0.060.41-0.060.63s0.030.420.060.63l-0.840.73c-0.180.16-0.220.42-0.10.63l0.59 1.02c0.120.210.370.30.590.22l1.06-0.36c0.320.270.680.48 1.080.63l0.22 1.09c0.050.230.250.40.490.4h1.18c0.24 0 0.44-0.170.49-0.4l0.22-1.09c0.4-0.150.76-0.36 1.08-0.63l1.060.36c0.230.080.47-0.020.59-0.22l0.59-1.02c0.12-0.210.08-0.47-0.1-0.63l-0.84-0.73c0.03-0.210.06-0.410.06-0.63zM18 19c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zm-4-7.74V6h3v4h2V5c0-0.55-0.45-1-1-1h-4c0-0.55-0.45-1-1-1H6c-0.55 0-1 0.45-1 1v15H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h8.26A6.96 6.96 0 0 1 11 17c0-2.38 1.19-4.47 3-5.74zM10 12c0-0.550.45-1 1-1s1 0.45 1 1-0.45 1-1 1-1-0.45-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrRoomPreferences;
