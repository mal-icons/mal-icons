import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-pest-control",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsPestControl {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 15v-2h-3.07c-0.05-0.39-0.12-0.77-0.22-1.14l2.58-1.49-1-1.73L16.92 10c-0.28-0.48-0.62-0.91-0.99-1.290.04-0.230.07-0.460.07-0.71 0-0.8-0.24-1.55-0.65-2.18L17 4.17l-1.41-1.41-1.72 1.72c-1.68-0.89-3.1-0.33-3.73 0L8.41 2.76 7 4.17l1.65 1.65A3.99 3.99 0 0 0 8 8c0 0.250.030.480.070.72-0.370.38-0.710.81-0.99 1.28L4.71 8.63l-1 1.73 2.58 1.49c-0.10.37-0.170.75-0.22 1.14H3v2h3.07c0.050.390.120.770.22 1.14l-2.58 1.49 1 1.73L7.08 18c1.08 1.81 2.88 3 4.92 3s3.84-1.19 4.92-3l2.37 1.37 1-1.73-2.58-1.49c0.1-0.370.17-0.750.22-1.14H21zm-8 2h-2v-6h2v6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsPestControl;
