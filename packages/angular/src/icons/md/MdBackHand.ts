import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-back-hand",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdBackHand {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 7a2.5 2.5 0 0 0-3-2.45V4a2.5 2.5 0 0 0-3.17-2.41A2.51 2.51 0 0 0 12.5 0c-1.23 0-2.250.89-2.46 2.06A2.5 2.5 0 0 0 7 4.5v5.89c-0.34-0.31-0.76-0.54-1.22-0.66l-0.77-0.21c-0.83-0.23-1.70.09-2.190.83-0.380.57-0.4 1.31-0.15 1.95l2.56 6.43A8.35 8.35 0 0 0 13 24c4.42 0 8-3.58 8-8V7zm-2 9c0 3.31-2.69 6-6 6-2.61 0-4.95-1.59-5.91-4.01l-2.6-6.540.530.14c0.460.120.830.46 1 0.9L7 15h2V4.5c0-0.280.22-0.50.5-0.5s0.50.220.50.5V12h2V2.5c0-0.280.22-0.50.5-0.5s0.50.220.50.5V12h2V4c0-0.280.22-0.50.5-0.5s0.50.220.50.5v8h2V7c0-0.280.22-0.50.5-0.5s0.50.220.50.5v9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdBackHand;
