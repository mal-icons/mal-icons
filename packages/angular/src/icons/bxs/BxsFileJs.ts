import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-file-js",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsFileJs {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-2.74 14.19c0 1.35-0.64 1.81-1.68 1.81-0.24 0-0.57-0.04-0.78-0.11l0.12-0.86c0.150.050.340.080.550.080.45 0 0.73-0.20.73-0.94v-2.97h1.06v2.98zm2.04 1.81c-0.54 0-1.07-0.14-1.34-0.29l0.22-0.88c0.290.150.730.29 1.180.290.49 0 0.75-0.20.75-0.51 0-0.29-0.22-0.46-0.79-0.67-0.78-0.27-1.29-0.71-1.29-1.39 0-0.810.67-1.42 1.79-1.420.53 0 0.930.11 1.210.24l-0.240.86c-0.19-0.09-0.52-0.22-0.99-0.22s-0.690.21-0.690.46c0 0.30.270.440.880.670.830.31 1.230.74 1.23 1.4100.79-0.61 1.47-1.91 1.47zM14 9h-1V4l5 5h-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsFileJs;
