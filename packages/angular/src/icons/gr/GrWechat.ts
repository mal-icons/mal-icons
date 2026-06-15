import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-wechat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrWechat {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M21.5 19.23C23.03 18.12 24 16.49 24 14.67c0-3.33-3.24-6.02-7.23-6.02s-7.23 2.7-7.23 6.02c0 3.33 3.24 6.02 7.23 6.020.83 0 1.62-0.12 2.36-0.33l0.21-0.03c0.14 0 0.270.040.380.11l1.580.910.140.05a0.240.24 0 0 0 0.24-0.24l-0.04-0.18-0.33-1.22-0.02-0.15a0.480.48 0 0 1 0.2-0.39ZM8.68 2C3.88 2 0 5.24 0 9.23c0 2.18 1.17 4.14 3 5.46a0.570.57 0 0 1 0.240.47l-0.030.18-0.39 1.46-0.050.21c0 0.160.130.290.290.29l0.17-0.05 1.9-1.1a0.910.91 0 0 1 0.46-0.13l0.260.04c0.890.26 1.840.4 2.830.4l0.48-0.01a5.59 5.59 0 0 1-0.29-1.77c0-3.64 3.54-6.59 7.91-6.59l0.470.01C16.59 4.64 13 2 8.68 2Zm5.69 11.71a0.960.96 0 1 1 0-1.930.960.96 0 0 10 1.93Zm4.82 0a0.960.96 0 1 1 0-1.930.960.96 0 0 1 0 1.93ZM5.78 8.07a1.16 1.16 0 1 1 0-2.31 1.16 1.16 0 0 1 0 2.31Zm5.78 0a1.16 1.16 0 1 1 0-2.31 1.16 1.16 0 0 1 0 2.31Z","clip-rule":"evenodd"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrWechat;
