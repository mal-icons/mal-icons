import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-scopus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiScopus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M24 19.06l-0.14-1.78c-1.430.77-2.94 1.08-4.46 1.08-3.32 0-5.96-2.78-5.96-6.47 0-3.9 2.6-6.31 5.63-6.31 1.92 0 3.390.3 4.79 1.08L24 4.89c-1.29-0.61-2.34-0.89-4.7-0.89-4.53 0-7.97 3.53-7.97 8.02 0 5.12 4.09 7.92 7.9 7.92 1.92 0 3.51-0.26 4.77-0.89zm-14.95-3.46c0-2.22-1.96-3.22-3.86-4.35C3.72 10.36 2.15 9.76 2.15 8.12c0-1.220.89-2.55 2.64-2.55 1.52 0 2.570.23 3.9 1.03l0.12-1.85c-1.24-0.51-2.13-0.75-4.14-0.75C1.8 4.010.05 5.880.05 8.26c0 2.38 2.1 3.41 4.02 4.58 1.430.87 2.92 1.45 2.92 2.99 0 1.5-1.33 2.57-2.92 2.57-1.57 0-2.59-0.35-3.79-1.07L0 19.18c1.220.56 2.450.82 4.160.82 2.38 0 4.89-1.47 4.89-4.39z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiScopus;
