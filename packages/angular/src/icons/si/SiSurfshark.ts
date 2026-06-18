import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-surfshark",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSurfshark {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.47 0C7.820.2 6.3 2.29 5.87 3.43c-1.61 4.87-3.13 14.33-3.33 15.66-0.2 1.31-0.23 2.12-0.23 2.12 0 0.330.030.710.1 1.060.45 1.29 1.79 2.37 4.77 1.29a192.35 192.35 0 0 0 9.53-4.44c1.39-0.81 3.23-2.32 4.24-4.310.4-0.810.68-1.720.73-2.65v-0.45c-0.03-2.29-0.05-4.69-0.2-7.01 0 0-0.12-1.49-0.2-2.02-0.08-0.53-0.18-0.73-0.18-0.73C20.630.91 19.690.38 18.710.13 18.230.03 17.70.02 17.1 0Zm4.69 4.44h0.25c0.28 0 0.480.20.480.45V6.53c0 0.25-0.20.46-0.480.46h-0.25c-1.59 0-2.87 1.26-2.87 2.8v2.5c0 2.98-2.47 5.37-5.5 5.37h-0.25c-0.28 0-0.48-0.2-0.48-0.45v-1.64c0-0.250.23-0.450.48-0.45h0.25c1.59 0 2.88-1.26 2.88-2.8V9.81c0-2.98 2.47-5.37 5.5-5.37z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSurfshark;
