import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-pest-control",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPestControl {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 14c0-0.55-0.45-1-1-1h-2.07c-0.05-0.39-0.12-0.77-0.22-1.14l1.72-0.99c0.48-0.280.64-0.890.37-1.37a1.01 1.01 0 0 0-1.37-0.37l-1.510.87c-0.28-0.48-0.62-0.91-0.99-1.290.04-0.230.07-0.460.07-0.71 0-0.8-0.24-1.55-0.65-2.18l0.94-0.94a11 0 1 0-1.41-1.41l-1.02 1.02c-1.68-0.89-3.1-0.33-3.73 0L9.12 3.46a11 0 1 0-1.41 1.41l0.940.94C8.24 6.45 8 7.2 8 8c0 0.250.030.480.070.72-0.370.38-0.710.81-0.99 1.28l-1.51-0.87a11 0 0 0-1.360.37c-0.280.48-0.11 1.090.37 1.37l1.720.99c-0.10.37-0.170.75-0.22 1.14H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h2.07c0.050.390.120.770.22 1.14l-1.720.99c-0.480.28-0.640.89-0.37 1.370.280.480.890.64 1.370.37L7.08 18c1.08 1.81 2.88 3 4.92 3s3.84-1.19 4.92-3l1.510.87c0.480.28 1.090.11 1.37-0.37s0.11-1.09-0.37-1.37l-1.72-0.99c0.1-0.370.17-0.750.22-1.14H20c0.55 0 1-0.45 1-1zm-9 3c-0.55 0-1-0.45-1-1v-4c0-0.550.45-1 1-1s1 0.45 1 1v4c0 0.55-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPestControl;
