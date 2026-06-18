import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-sailfishos",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSailfishos {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.98 5.1a0.310.31 0 0 0-0.41-0.17l-2.340.82a24.35 24.35 0 0 1-3.130.82c-2.160.4-3.72-1.34-3.72-1.34a0.320.32 0 0 0-0.36-0.1 4.83 4.83 0 0 0-0.460.17 13.15 13.15 0 0 1 1.7-4.8c0.1-0.10.1-0.27 0-0.37a0.370.37 0 0 0-0.41-0.11 27.17 27.17 0 0 0-4.2 2.6c-2.88 2.24-4.48 4.51-4.68 6.8-0.15 1.86 1.07 3.08 2.24 4.2l0.20.2a4.51 4.51 0 0 1-0.29 3.59c-1.04 2.3-3.36 4.31-6.26 5.4-0.910.35-1.680.6-1.680.6-0.150.05-0.240.21-0.20.37A0.320.32 0 0 0 0.32 24H0.4a34.29 34.29 0 0 0 6.59-2.36l0.6-0.3c3.72-1.93 5.7-4.2 5.93-6.690.16-1.59-0.79-2.66-1.8-3.6 1.29-1.8 5.49-3.23 5.52-3.23l4.14-1.44c1.32-0.42 2.34-0.82 2.4-0.85a0.30.3 0 0 0 0.18-0.42zM12.97 5.63a10.23 10.23 0 0 0-3.51 2.73 3.29 3.29 0 0 1-0.23-1.54c0.16-1.71 1.98-3.69 2.27-3.99a29.93 29.93 0 0 1 2.79-1.76 12.8 12.8 0 0 0-1.35 4.56ZM5.25 21.75a10.61 10.61 0 0 0 3.51-4.09 5.74 5.74 0 0 0 0.56-2.88 3.04 3.04 0 0 1 0.87 2.26c-0.23 2.18-2.93 3.74-2.95 3.76-0.650.34-1.310.65-1.990.95zm7.61-7.15c-0.15 1.71-1.25 3.18-2.75 4.39a4.01 4.01 0 0 0 0.68-1.88c0.16-1.64-0.99-2.78-2.11-3.87-1.12-1.09-2.19-2.16-2.06-3.720.16-1.83 1.3-3.47 2.7-4.86a5.24 5.24 0 0 0-0.76 2.13c-0.2 2.01 1.14 3.25 2.31 4.34 1.17 1.09 2.11 1.96 1.98 3.47zm-1.65-4.02a9.39 9.39 0 0 1-1.45-1.57c1.1-1.76 3.6-2.9 4.33-3.2a5.15 5.15 0 0 0 2.85 1.4c-0.610.22-4.34 1.53-5.72 3.37z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSailfishos;
