import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-headset-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrHeadsetOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4c3.87 0 7 3.13 7 7v1h-2c-0.6 0-1.130.27-1.490.68L21 18.17V11a9 9 0 0 0-9-9c-2.02 0-3.880.67-5.38 1.8l1.43 1.43A6.88 6.88 0 0 1 12 4zm9.19 17.19L2.81 2.81a11 0 0 0-1.41 0C1 3.2 1 3.83 1.39 4.22l2.63 2.63A8.91 8.91 0 0 0 3 11v7c0 1.10.9 2 2 2h2c1.1 0 2-0.9 2-2v-4c0-1.1-0.9-2-2-2H5v-1c0-0.940.19-1.830.52-2.65L15 17.83V18c0 1.10.9 2 2 2h0.17l1 1H13c-0.55 0-1 0.45-1 1s0.45 1 1 1h6c0.36 0 0.68-0.10.97-0.260.380.230.890.2 1.22-0.130.39-0.390.39-1.03 0-1.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrHeadsetOff;
