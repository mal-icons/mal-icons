import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-godaddy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGodaddy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.7 2.29c-2.49-1.55-5.78-1.19-8.710.65C9.08 1.1 5.790.74 3.3 2.29c-3.94 2.46-4.42 8.81-1.07 14.17 2.47 3.95 6.33 6.27 9.77 6.23 3.440.04 7.3-2.27 9.77-6.23 3.35-5.36 2.87-11.7-1.07-14.17zM4.04 15.33a12.84 12.84 0 1-1.55-3.54 10.12 10.12 0 1-0.34-3.34c0.15-1.980.96-3.52 2.27-4.34 1.32-0.82 3.05-0.87 4.9-0.140.280.110.560.240.830.38A15.11 15.11 0 7.5 7.54c-2.03 3.26-2.65 6.88-1.94 9.77a13.25 13.25 0 1-1.51-1.98zm17.47-3.54a12.87 12.87 0 1-1.55 3.54 13.25 13.25 0 1-1.51 1.98c0.64-2.590.2-5.76-1.35-8.73a0.390.39 0 0-0.56-0.15l-4.85 3.03a0.40.4 0 0-0.130.55l0.71 1.14a0.40.4 0 0.550.13l3.15-1.96c0.10.310.20.610.280.920.3 1.090.41 2.210.34 3.34-0.15 1.98-0.96 3.53-2.27 4.35a4.44 4.44 0 1-2.250.65h-0.1a4.43 4.43 0 1-2.25-0.65c-1.31-0.82-2.12-2.37-2.27-4.35-0.07-1.120.04-2.250.34-3.34a13.21 13.21 0 14.05-6.48 10.15 10.15 0 12.85-1.76c1.85-0.73 3.59-0.68 4.90.14 1.320.82 2.12 2.37 2.27 4.35a10.15 10.15 0 1-0.33 3.33z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGodaddy;
