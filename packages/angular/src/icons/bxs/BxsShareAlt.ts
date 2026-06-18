import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-share-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsShareAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 12c0 1.65 1.35 3 3 3 0.79 0 1.51-0.31 2.05-0.82l5.99 3.42c-0.020.13-0.040.26-0.040.4 0 1.65 1.35 3 3 3s3-1.35 3-3-1.35-3-3-3c-0.79 0-1.510.32-2.050.82L8.96 12.4c0.02-0.130.04-0.260.04-0.4s-0.02-0.27-0.04-0.4l5.99-3.42c0.540.51 1.250.82 2.050.82 1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3c0 0.140.020.270.040.4L8.05 9.82A2.98 2.98 0 0 0 6 9c-1.65 0-3 1.35-3 3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsShareAlt;
