import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-zoom-out",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiZoomOut {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 11h-5c-0.28 0-0.50.22-0.50.5s0.220.50.50.5h5c0.28 0 0.5-0.220.5-0.5s-0.22-0.5-0.5-0.5zM19.38 15.96l-0.95-0.99-0.54-0.54-0.75-0.75c0.23-0.690.35-1.420.35-2.18 0-3.86-3.14-7-7-7s-7 3.14-7 7 3.14 7 7 7c0.76 0 1.5-0.13 2.18-0.35l0.750.75 1.51 1.510.060.060.070.06c0.60.51 1.350.78 2.10.78 1.73 0 3.13-1.4 3.13-3.13 0-0.84-0.33-1.63-0.92-2.22zm-13.88-4.46c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiZoomOut;
