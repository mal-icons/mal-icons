import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-globe-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcGlobe24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 1c6.08 0 11 4.93 11 11s-4.92 11-11 11S1 18.08 1 12 5.93 1 12 1Zm3.24 10.5v0c-0.1-2.71-0.99-4.9-1.89-6.45a13.92 13.92 0 0 0-1.3-1.88L12 3.11l-0.050.06c-0.350.43-0.83 1.06-1.3 1.88-0.9 1.55-1.79 3.74-1.89 6.45Zm-12.73 0h4.75c0.1-3.04 1.1-5.49 2.09-7.20.39-0.670.78-1.23 1.12-1.67C6.11 3.33 2.75 7 2.51 11.5Zm18.97 0C21.25 7 17.89 3.33 13.53 2.62c0.340.440.73 1 1.12 1.670.99 1.71 1.99 4.17 2.09 7.2ZM8.79 13c0.18 2.48 1.02 4.5 1.86 5.950.380.660.82 1.29 1.3 1.88l0.050.060.05-0.06c0.35-0.420.83-1.06 1.3-1.880.84-1.45 1.68-3.47 1.86-5.95Zm-1.5 0H2.55a9.51 9.51 0 0 0 7.92 8.38 15.77 15.77 0 0 1-1.12-1.67C8.41 18.09 7.47 15.81 7.28 13Zm9.43 0c-0.19 2.81-1.13 5.09-2.07 6.7-0.390.67-0.78 1.23-1.12 1.67A9.51 9.51 0 0 0 21.45 13Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcGlobe24;
