import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-playstation3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPlaystation3 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.36 9.43h-3.15c-0.97 0-1.450.6-1.45 1.38v2.37c0 0.48-0.230.83-0.710.83H7.3a0.040.04 0 0-0.040.04v0.47c0 0.020.010.030.030.03h3.11c0.97 0 1.45-0.6 1.45-1.38v-2.36c0-0.480.22-0.830.71-0.83h2.78c0.02 0 0.04-0.010.04-0.03v-0.47c0-0.02-0.02-0.04-0.04-0.04zm-9.27 0H0.04c-0.02 0-0.040.02-0.040.04v0.48c0 0.020.020.040.040.04h5.69c0.48 0 0.710.350.710.83s-0.230.83-0.710.83H1.23c-0.7 0-1.230.59-1.23 1.37v1.51c0 0.020.020.040.040.04h1.03c0.02 0 0.04-0.020.04-0.04v-1.51c0-0.480.28-0.820.68-0.82H6.1c0.97 0 1.44-0.59 1.44-1.37 0-0.78-0.47-1.38-1.44-1.38zm17.45 2.5a0.040.04 0 10-0.06c0.3-0.250.45-0.630.45-1.06 0-0.78-0.47-1.38-1.45-1.38h-6.06c-0.02 0-0.040.02-0.040.04v0.48c0 0.020.020.040.040.04h5.7c0.48 0 0.720.350.720.83s-0.230.83-0.710.83h-5.7c-0.02 0-0.040.02-0.040.04v0.48c0 0.020.020.030.040.03h5.7c0.630.010.710.620.710.93v0.06c0 0.49-0.230.83-0.710.83h-5.7c-0.02 0-0.040.02-0.040.03v0.48c0 0.020.020.040.040.04h6.05c0.97 0 1.45-0.64 1.45-1.38v-0.06c0-0.47-0.15-0.92-0.45-1.19z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPlaystation3;
