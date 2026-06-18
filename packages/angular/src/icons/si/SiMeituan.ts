import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-meituan",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMeituan {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.92 0c-2.41 0-3.280.25-4.160.72A4.91 4.91 0 0 0 0.72 2.76C0.25 3.64 0 4.52 0 6.92v10.15c0 2.410.25 3.280.72 4.16a4.91 4.91 0 0 0 2.04 2.04c0.880.47 1.750.72 4.160.72h10.16c2.41 0 3.28-0.25 4.16-0.72a4.91 4.91 0 0 0 2.04-2.04c0.47-0.880.72-1.750.72-4.16V6.92c0-2.41-0.25-3.28-0.72-4.16A4.91 4.91 0 0 0 21.240.72C20.360.25 19.48 0 17.08 0ZM4.17 7.51h1.08c0.040.240.070.490.110.74h3.47c0.05-0.250.08-0.50.1-0.74h1.11a9.85 9.85 0 0 1-0.090.74h1.56v0.87H7.62v0.7h3.64v0.86h-3.64v0.67h3.64v0.85h-3.64v0.82h3.89v0.87H7.88c0.780.94 2.22 1.53 3.78 1.65l-0.540.94c-1.44-0.17-3.1-0.85-4.03-2.04-0.86 1.19-2.49 1.92-4.53 2.07l0.32-1c1.38-0.02 2.81-0.74 3.43-1.61h-3.62v-0.86h3.86v-0.82h-3.64v-0.85h3.64v-0.67h-3.64v-0.85h3.64v-0.7H2.7v-0.87h1.56zm8.60.18h7.98c0.36 0 0.570.20.570.55v8.15H13.33c-0.36 0-0.56-0.2-0.56-0.55zm1.040.89V15.5h6.46V8.58Zm40.48h1.02v0.76h0.98v0.84h-0.97V13c0 0.81-0.1 1.4-0.32 2.02h-1.11c0.34-0.720.41-1.220.41-1.99v-2.39h-0.93c-0.14 1.54-0.74 3.45-1.36 4.38h-1.13c0.61-0.85 1.3-2.53 1.47-4.38h-1.51v-0.83h3.47z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMeituan;
