import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-prepbytes",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPrepbytes {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.43 0 0.1 5.370.1 12c0 6.63 5.33 12 11.9 12s11.9-5.37 11.9-12c0-6.63-5.33-12-11.9-12zm1.41 7.16h1.13v3.91l0.27-0.19a3.56 3.56 0 0 1 2.25-0.7c0.01 0 0.0200.030 1.920.1 3.4 1.75 3.3 3.67-0.22 3.54-5.07 4.58-6.62 1.39-0.38-0.78-0.35-0.48-0.37-4.51l0.03-3.59zm-4.730.13a3.43 3.43 0 0 1 2.130.75c1.51 1.18 1.79 3.350.64 4.87-1.17 1.54-3.36 1.84-4.90.68-0.08-0.05-0.19-0.11-0.27-0.16-0.03 0-0.030.86-0.03 1.93v1.93H5.12v-3.19c0-3.860-4.080.38-4.83A3.61 3.61 0 0 1 7.91 7.38c0.25-0.060.51-0.080.77-0.08zm-0.07 1.1c-1.05-0.01-1.980.7-2.25 1.71-0.33 1.240.4 2.51 1.64 2.84 1.240.33 2.51-0.4 2.84-1.640.33-1.24-0.4-2.51-1.63-2.84a2.21 2.21 0 0 0-0.59-0.08zm8.42 2.9c-1.12-0.07-2.140.66-2.44 1.74-0.35 1.270.4 2.57 1.66 2.92 1.270.35 2.57-0.4 2.92-1.660.35-1.27-0.4-2.57-1.66-2.92a1.48 1.48 0 0 0-0.48-0.08z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPrepbytes;
