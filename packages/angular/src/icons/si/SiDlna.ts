import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-dlna",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDlna {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.26 12.67H13.02c-1.05 0-2.10.49-2.69 1.27v-0.02a3.24 3.24 0 1-2.63 1.35 3.25 3.25 0 10-6.5c1.09 0 2.040.54 2.63 1.35v-0.01c0.590.78 1.64 1.27 2.69 1.27h10.13c0.1900.87-0.090.85-0.98-0.88-5.09-5.88-8.99-11.92-8.99-3.72 0-7.05 1.48-9.26 3.8-0.360.530.010.690.350.73H9.77c1.05 0 2.1-0.5 2.69-1.28v0.02a3.24 3.24 0 12.63-1.35 3.25 3.25 0 10 6.5 3.24 3.24 0 1-2.63-1.35v0.02c-0.59-0.78-1.64-1.27-2.69-1.27H2.55l0.030s-1.07-0.06-1.720.86C0.36 8.9 0 10.62 0 12c0 1.390.2 2.650.87 3.920.560.91 1.710.85 1.710.85l-0.040.01h7.23c1.05 0 2.1-0.49 2.69-1.27v0.02a3.24 3.24 0 12.63-1.36 3.25 3.25 0 10 6.5 3.24 3.24 0 1-2.63-1.35v0.02c-0.59-0.78-1.64-1.28-2.69-1.28H3.16c-0.330.04-0.70.2-0.380.7 2.22 2.34 5.56 3.82 9.29 3.82 6.05 0 11.06-3.91 11.93-9.010-0.71-0.49-0.88-0.74-0.91"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDlna;
