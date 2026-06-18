import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-honeygain",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHoneygain {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.72 3.05a1.35 1.35 0 0 0-1.38 1.56 6.38 6.38 0 0 0-1.86 3.2l-0.770c-0.63 0-1.350-2.120.02l-7.96-0.03A4.39 4.39 0 0 0 3.4 16.46l00-2.1 3.54 4.34-1.48c2.61 1.71 6.28 2.42 10.28 2.42a6.57 6.57 0 0 0 3.06-12.39 4.97 4.97 0 0 1 2.55-1.16 1.35 1.35 0 1 0-0.1-1.38c-1.470.19-2.790.86-3.88 1.99-0.22-0.06-0.44-0.1-0.67-0.13a4.94 4.94 0 0 1 1.33-2.21 1.35 1.35 0 1 0 0.5-2.62ZM4.39 9.17c0.05 0 0.11 0 0.160l0.030h0.03l7.940.03-6.08 5.17-0.020.02-0.020.02a3 3 0 0 1-2.190.79 3.02 3.02 0 0 1-2.86-3.17 3.01 3.01 0 0 1 3.01-2.86Zm10.550.02h0.46l0.530a5.2 5.2 0 0 1 5.2 5.2 5.2 5.2 0 0 1-5.2 5.2c-0.35 0-0.7-0.01-1.04-0.02-1.78-1.58-2.68-3.27-2.66-5.030.02-3.02 2.7-5.32 2.73-5.35zm-3.63 2.88a7.14 7.14 0 0 0-0.47 2.46c-0.01 1.720.65 3.36 1.96 4.89a20.2 20.2 0 0 1-2.57-0.45c-1.08-1.83-1.43-3.54-1.04-5.09Zm-3.66 3.11c0.01 1.040.25 2.110.74 3.22-1.25-0.49-2.3-1.12-3.12-1.9a4.39 4.39 0 0 0 2.09-1.07Zm9.24-4.08a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4zm-0.430.72a0.550.55 0 0 1 0.520.710.540.54 0 0 1-0.310.340.540.54 0 0 1-0.320.030.540.54 0 0 1-0.31-0.190.550.55 0 0 1-0.12-0.40.560.56 0 0 1 0.09-0.250.550.55 0 0 1 0.45-0.24z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHoneygain;
