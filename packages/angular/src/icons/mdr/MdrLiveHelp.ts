import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-live-help",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrLiveHelp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 2H5a2 2 0 0 0-2 2v14c0 1.10.9 2 2 2h4l2.29 2.29c0.390.39 1.020.39 1.41 0L15 20h4c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75-0.90.92c-0.580.59-0.99 1.1-1.12 2.06-0.060.43-0.410.76-0.850.76h-0.31a0.860.86 0 0 1-0.85-0.98c0.11-0.910.53-1.72 1.14-2.34l1.24-1.26c0.36-0.360.58-0.860.58-1.41 0-1.1-0.9-2-2-2-0.87 0-1.620.57-1.89 1.35-0.130.37-0.440.64-0.830.64h-0.3c-0.58 0-0.98-0.56-0.82-1.12A4 4 0 0 1 16 8c0 0.88-0.36 1.68-0.93 2.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrLiveHelp;
