import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-servbay",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiServbay {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.20.03a0.510.51 0 0 1 0.640.31c0.040.110.040.230.010.34l-2.26 6.36a0.510.51 0 0 1-0.320.3L1 11.17l2.67-7.33a0.510.51 0 0 1 0.32-0.3L14.20.03h0ZM1 11.76l2.78 4.05a0.550.55 0 0 0 0.620.23l5.12-1.89a0.480.48 0 0 0 0.29-0.65l-0.03-0.06L7.41 9.62 1 11.76Zm8.8 12.22a0.510.51 0 0 1-0.64-0.310.520.52 0 0 1-0.01-0.34l2.24-6.36a0.510.51 0 0 1 0.32-0.3L23 12.83l-2.66 7.33a0.510.51 0 0 1-0.320.3l-10.22 3.51v0ZM20.44 8.08a0.550.55 0 0 0-0.62-0.23l-5.12 1.89a0.480.48 0 0 0-0.290.65l0.030.06 2.34 3.85 6.22-2.12-2.55-4.11h0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiServbay;
