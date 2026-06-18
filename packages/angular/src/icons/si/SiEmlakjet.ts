import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-emlakjet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiEmlakjet {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.65 16.11v-0.24a3.54 3.54 0 0-1.27-2.47c-0.72-0.66-1.69-0.96-2.65-0.9-1.870.12-3.38 1.75-3.38 3.62 0 0.780.12 1.570.42 2.47H4.55V6.95l7.42-5.12 7.48 5.12v11.69h-4.22c0.18-0.660.42-1.690.42-2.53m5.07-10.24L12.450.14c-0.3-0.18-0.66-0.18-0.9 0L3.22 5.86c-0.240.12-0.360.36-0.360.66V19.48c0 0.480.360.840.840.84H9.92a0.820.82 0 0.84-0.84c0-0.06 0-0.18-0.06-0.24l-0.06-0.18c-0.3-0.72-0.66-1.63-0.66-2.53v-0.18c-0.06-0.540.12-1.080.48-1.45a2.1 2.1 0 11.39-0.72c0.54-0.06 1.030.12 1.450.480.420.360.660.840.72 1.39v0.18c0.06 1.21-0.72 2.95-0.84 3.14l-1.15 2.17-0.18-0.36c-0.12-0.18-0.3-0.36-0.48-0.42-0.18-0.06-0.42-0.06-0.60.06-0.180.12-0.360.3-0.420.48s-0.060.420.060.6l0.91 1.69c0.120.240.420.420.720.420.3 0 0.6-0.180.72-0.42l1.81-3.37h5.73a0.820.82 0 0.84-0.84V6.52c-0.06-0.3-0.18-0.54-0.42-0.66"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiEmlakjet;
