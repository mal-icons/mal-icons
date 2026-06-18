import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-fampay",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFampay {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.83 23.97a0.210.21 0 1-0.23-0.02c-0.65-0.41-3.89-2.57-6.09-5.29-1.34-1.68 3.78-4.17 3.78-3.840.01 1.780.5 6.47 2.6 8.75a0.270.27 0 1-0.010.36l-0.050.04 M13.48 13.08l4.66-2.12a4.39 4.39 0 2.54-2.64l0.58-1.63a0.170.17 0 0-0.11-0.220.170.17 0 0-0.12 0l-8.9 3.770.03-0.14a0.90.9 0 1.44-0.63c1.51-0.93 6.9-3.69 6.9-3.69a6.59 6.59 0 3.53-4.11L23.440.28a0.230.23 0 0-0.15-0.270.220.22 0 0-0.14 0s-8.12 3.16-10.73 4.43C9.8 5.71 7.13 7.34 6.2 12.14c-0.38 1.950.31 3.59 1.61 5.46-0.01-1.84 4.64-4.02 5.67-4.52z M2.03 4.86C1.29 4.30.66 4.250.55 4.3c-0.05-0.170.85-0.60.96-0.710.36-0.350.56-0.80.99-1.10.86-0.61 1.93-0.42 2.820.060.460.25 1.71 1.07 1.73 1.11A14.02 14.02 0 18.95 5.38a0.240.24 0 10 0.31c-0.210.2-0.420.35-0.670.56-1.7 1.43-2.73 5.24-2.75 5.71V12s-1-5.38-3.5-7.14z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFampay;
