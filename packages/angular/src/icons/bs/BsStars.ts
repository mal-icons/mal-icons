import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-stars",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsStars {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.66 6.25c0.11-0.330.58-0.330.69 0l0.65 1.94a2.89 2.89 0 0 0 1.83 1.83l1.940.65c0.330.110.330.58 0 0.69l-1.940.65a2.89 2.89 0 0 0-1.83 1.83l-0.64 1.94a0.360.36 0 0 1-0.69 0l-0.64-1.94a2.89 2.89 0 0 0-1.83-1.83l-1.94-0.64a0.360.36 0 0 1 0-0.69l1.94-0.64a2.89 2.89 0 0 0 1.83-1.83zM3.79 1.15a0.220.22 0 0 1 0.41 0l0.39 1.16c0.170.520.580.92 1.1 1.1l1.160.39a0.220.22 0 0 1 0 0.41l-1.160.39A1.73 1.73 0 0 0 4.59 5.69l-0.39 1.16a0.220.22 0 0 1-0.41 0L3.41 5.69A1.73 1.73 0 0 0 2.31 4.59l-1.16-0.39a0.220.22 0 0 1 0-0.41l1.16-0.39A1.73 1.73 0 0 0 3.41 2.31zM10.860.1a0.140.14 0 0 1 0.27 0l0.260.77c0.120.350.390.620.730.73l0.770.26a0.140.14 0 0 1 0 0.27l-0.770.26a1.16 1.16 0 0 0-0.730.73l-0.260.77a0.140.14 0 0 1-0.27 0l-0.26-0.77a1.16 1.16 0 0 0-0.73-0.73L9.1 2.14a0.140.14 0 0 1 0-0.27l0.77-0.26c0.35-0.110.62-0.390.73-0.73z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsStars;
