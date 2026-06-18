import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-quantconnect",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiQuantconnect {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.07 16.66a12.11 12.11 0 0 1-6.4 6.4A12.02 12.02 0 0 1 12 24v-2.8a8.63 8.63 0 0 0 3.55-0.75 9.46 9.46 0 0 0 2.98-1.93 11.37 11.37 0 0 0 1.93-2.92 9.15 9.15 0 0 0 0.75-3.61 8.63 8.63 0 0 0-0.75-3.55 8.93 8.93 0 0 0-4.91-4.91 9.53 9.53 0 0 0-7.09 0 9.48 9.48 0 0 0-4.91 4.91A9.76 9.76 0 0 0 2.8 12H0A12.01 12.01 0 0 1 0.93 7.34 12.09 12.09 0 0 1 7.340.93a12.12 12.12 0 0 1 9.33 0 11.51 11.51 0 0 1 3.79 2.61 11.5 11.5 0 0 1 2.61 3.8 12.12 12.12 0 0 1 0 9.33zM12 9.89V7.09a4.79 4.79 0 0 0-3.48 1.43 4.71 4.71 0 0 0-1.49 3.48 4.61 4.61 0 0 0 1.49 3.48c1.83 1.92 4.88 2 6.80.17a4.76 4.76 0 0 0 0.17-0.17 4.34 4.34 0 0 0 1.43-3.48h-2.8a2.06 2.06 0 0 1-0.62 1.49 2.02 2.02 0 0 1-1.490.62c-1.17-0.01-2.11-0.95-2.11-2.11a2.02 2.02 0 0 1 0.62-1.49 2.06 2.06 0 0 1 1.49-0.62zm5.97 8.08a7.04 7.04 0 0 0 1.81-2.68 7.47 7.47 0 0 0 0.68-3.3 7.66 7.66 0 0 0-0.68-3.3 8.45 8.45 0 0 0-4.48-4.48 7.47 7.47 0 0 0-3.3-0.68v2.8a5.31 5.31 0 0 1 3.98 1.68 5.4 5.4 0 0 1 1.68 3.98c-0.03 3.12-2.59 5.63-5.72 5.6-3.08-0.03-5.56-2.52-5.6-5.6H3.55a8.4 8.4 0 0 0 0.62 3.3 9.29 9.29 0 0 0 4.54 4.54 9.04 9.04 0 0 0 6.59 0 8 8 0 0 0 2.68-1.86z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiQuantconnect;
