import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-cinema4d",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCinema4d {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.05 0C5.39-0.010 5.41 0 11.980 18.65 5.48 23.98 11.98 24c6.540.02 12.06-5.31 12.02-12-0.01-1.66-0.53-5.37-1.84-5.28-1.980.14-2.16 4.12-2.38 5.41-0.42 2.46-1.35 5.08-2.95 6.99-1.88 2.36-4.7 3.63-7.66 3.16-3.55-0.56-5.89-3.28-6.68-5.2-0.75-1.72-1.03-4.16-0.07-6.32 1.16-2.77 3.73-4.63 6.28-5.58 2.01-0.83 4.1-1.15 5.36-1.37 2.52-0.5 2.86-1.46 2.81-2.15-0.01-0.25-0.26-0.72-0.78-0.94C15.030.27 13.270 12.05 0zm5.1 1.34c0.140.40.090.85-0.15 1.26-0.320.56-0.97 1.05-1.9 1.29-1.640.43-2.980.55-4.340.96-1.310.39-3.4 1.02-5.32 2.55-0.270.84-0.34 1.89-0.37 2.660.15 5.01 4.56 8.88 9.17 8.680.85-0.04 1.92-0.26 2.91-0.68a13.56 13.56 0 0 0 1.39-2.68l00v0c0.42-1.030.61-1.840.8-2.790.32-1.560.2-2.88 1.01-4.760.25-0.580.71-1.11 1.26-1.350.25-0.10.52-0.130.79-0.07-0.89-2.47-3.11-4.33-5.26-5.07z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCinema4d;
