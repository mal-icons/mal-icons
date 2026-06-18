import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-docker",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlDocker {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.17 9.82a4.76 4.76 0 0 0-0.840.07 3.12 3.12 0 0 0-1.43-2.14l-0.28-0.16-0.190.27a3.7 3.7 0 0 0-0.51 1.19 2.84 2.84 0 0 0 0.33 2.22 4.11 4.11 0 0 1-1.450.35H2.63a0.630.63 0 0 0-0.630.62 9.6 9.6 0 0 0 0.58 3.39 5 5 0 0 0 2 2.6 8.86 8.86 0 0 0 4.420.95 13.27 13.27 0 0 0 2.42-0.18 10.09 10.09 0 0 0 3.19-1.15A8.9 8.9 0 0 0 16.78 16a11.94 11.94 0 0 0 2.13-3.67h0.19a3.08 3.08 0 0 0 2.23-0.84 2.36 2.36 0 0 0 0.59-0.87l0.08-0.22-0.2-0.16a2.69 2.69 0 0 0-1.63-0.42z"}],["path",{"d":"M5.61 9.35H3.85a0.160.16 0 0 0-0.160.15v1.58a0.160.16 0 0 0 0.160.15h1.76a0.160.16 0 0 0 0.16-0.15V9.5a0.160.16 0 0 0-0.16-0.15zm2.44 0H6.28a0.160.16 0 0 0-0.160.15v1.58a0.160.16 0 0 0 0.160.15h1.77a0.150.15 0 0 0 0.15-0.15V9.5a0.150.15 0 0 0-0.15-0.15zm2.47 0H8.75a0.150.15 0 0 0-0.150.15v1.58a0.150.15 0 0 0 0.150.15h1.77a0.150.15 0 0 0 0.15-0.15V9.5a0.150.15 0 0 0-0.15-0.15zm0.67 0a0.150.15 0 0 0-0.190.15v1.58a0.150.15 0 0 0 0.150.15H13a0.150.15 0 0 0 0.15-0.15V9.5a0.150.15 0 0 0-0.15-0.15zM6.28 7.09H8a0.160.16 0 0 1 0.160.16v1.56A0.160.16 0 0 1 8 9H6.28a0.150.15 0 0 1-0.15-0.15V7.24a0.150.15 0 0 1 0.15-0.15zm2.47 0h1.77a0.150.15 0 0 1 0.150.15v1.57a0.160.16 0 0 1-0.160.16H8.75a0.150.15 0 0 1-0.15-0.15V7.24a0.150.15 0 0 1 0.15-0.15zm2.44 0H13a0.150.15 0 0 1 0.150.15v1.57A0.150.15 0 0 1 13 9h-1.81a0.160.16 0 0 1-0.19-0.19V7.24a0.150.15 0 0 1 0.19-0.15z"}],["rect",{"x":"11.04","y":"4.82","width":"2.07","height":"1.88","rx":"0.15"}],["path",{"d":"M13.65 9.35a0.150.15 0 0 0-0.150.15v1.58a0.150.15 0 0 0 0.150.15h1.77a0.150.15 0 0 0 0.15-0.15V9.5a0.150.15 0 0 0-0.15-0.15z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlDocker;
