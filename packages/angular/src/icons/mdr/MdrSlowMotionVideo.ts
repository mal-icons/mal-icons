import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-slow-motion-video",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSlowMotionVideo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 8.5v7c0 0.410.470.650.80.4l4.67-3.5c0.27-0.20.27-0.6 0-0.8L10.8 8.1a0.50.5 0 0 0-0.80.4zm1-5.27c0-0.64-0.59-1.13-1.21-0.99-1.120.26-2.180.7-3.12 1.3-0.530.34-0.61 1.1-0.16 1.550.320.320.830.4 1.210.160.77-0.49 1.62-0.85 2.54-1.050.44-0.10.74-0.510.74-0.97zM5.1 6.51c-0.46-0.45-1.21-0.38-1.550.16-0.60.94-1.04 2-1.3 3.12-0.140.620.34 1.210.98 1.210.45 0 0.87-0.30.96-0.740.2-0.910.57-1.77 1.05-2.530.26-0.390.18-0.9-0.14-1.22zM3.23 13c-0.64 0-1.130.59-0.99 1.210.26 1.120.7 2.17 1.3 3.120.340.54 1.10.61 1.550.160.32-0.320.4-0.830.15-1.21-0.49-0.76-0.85-1.61-1.05-2.53-0.09-0.45-0.5-0.75-0.96-0.75zm3.44 7.45c0.950.6 2 1.04 3.12 1.30.620.14 1.21-0.35 1.21-0.98 0-0.45-0.3-0.87-0.74-0.96a7.97 7.97 0 0 1-2.53-1.050.970.97 0 0 0-1.210.160.970.97 0 0 0 0.15 1.53zM22 12c0 4.73-3.3 8.71-7.73 9.74-0.620.15-1.22-0.34-1.22-0.98 0-0.460.31-0.860.75-0.97 3.55-0.82 6.2-4 6.2-7.79s-2.65-6.97-6.2-7.79c-0.44-0.1-0.75-0.51-0.75-0.97 0-0.640.6-1.13 1.22-0.98C18.7 3.29 22 7.27 22 12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSlowMotionVideo;
