import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-globe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsGlobe {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.92c-0.670.2-1.330.82-1.89 1.86A8 8 0 0 0 5.15 4H7.5zM4.09 4a9.3 9.3 0 0 1 0.64-1.54 7 7 0 0 1 0.6-0.93A7.03 7.03 0 0 0 2.26 4zm-0.58 3.5c0.03-0.880.14-1.720.31-2.5H1.67a7 7 0 0 0-0.66 2.5zM4.85 5a12.5 12.5 0 0 0-0.34 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-0.34-2.5zM4.51 8.5a12.5 12.5 0 0 0 0.34 2.5H7.5V8.5zm3.99 0V11h2.65c0.19-0.760.31-1.610.34-2.5zM5.15 12q0.210.580.47 1.07c0.55 1.03 1.22 1.65 1.89 1.86V12zm0.18 2.47a7 7 0 0 1-0.6-0.93A9.3 9.3 0 0 1 4.09 12H2.26a7 7 0 0 0 3.07 2.47M3.82 11a13.7 13.7 0 0 1-0.31-2.5h-2.49c0.060.890.29 1.730.66 2.5zm6.85 3.47A7 7 0 0 0 13.75 12H11.91a9.3 9.3 0 0 1-0.64 1.54 7 7 0 0 1-0.60.93M8.5 12v2.92c0.67-0.2 1.34-0.82 1.89-1.85q0.26-0.490.47-1.07zm3.68-1h2.15c0.37-0.770.59-1.610.66-2.5h-2.49a13.7 13.7 0 0 1-0.31 2.5m2.8-3.5a7 7 0 0 0-0.66-2.5H12.18c0.170.780.28 1.620.31 2.5zM11.27 2.46c0.250.460.460.980.64 1.54h1.84a7 7 0 0 0-3.07-2.47c0.220.280.420.60.60.93M10.86 4a8 8 0 0 0-0.47-1.07C9.84 1.9 9.17 1.28 8.5 1.08V4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsGlobe;
