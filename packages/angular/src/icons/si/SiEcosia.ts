import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-ecosia",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiEcosia {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.2 6.82H8.79v10.48h6.41v-3.34h-3.98v-1.26H13.8V11.42h-2.58v-1.26h3.98zM11.970.06A12 12 0 0 0 0 12.06a12 12 0 0 0 10.08 11.85c0.07-1.280.2-2.720.43-3.65v-0.01c00 0-0.01-0.01-0.01 00-0.01-0.01-0.01-0.01 00-0.010-0.010h-0.36c-2.31 0-5.94-0.33-6.92-3.45-1.46-4.64 2.03-6.31 3.48-4.97 0 00.010.010.020.010.01 0 0.01 0 0.0200.0100.01-0.010.02-0.02v-0.02c-0.32-0.94-2.15-6.87 2.64-8.5 4.08-1.37 8.07 1.49 7.46 5.27v0.02c0 0.010.010.010.010.01 0 00.010.010.020.01 0 0 0.0100.0200.3-0.25 1.6-1.19 2.92-0.15 1.250.980.84 3.73-1.63 5-0.010-0.010.01-0.020.01v0.02c0 0.010.010.010.020.020.0100.0200.020 1.6-0.24 4.32 1.19 2.11 4.38-1.45 2.1-4.71 2.37-6.17 2.37h-1.07s-0.01 0-0.010c0 0-0.010.01-0.010.01 0 0 0 0.01-0.010.01v0.01c-0.020.750.33 2.30.69 3.69A12 12 0 0 0 24 12.06 12 12 0 0 0 120.06a12 12 0 0 0-0.03 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiEcosia;
