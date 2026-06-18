import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-observable",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiObservable {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 20c-1.06 0-1.99-0.23-2.77-0.7a4.7 4.7 0 0 1-1.79-1.89 9.97 9.97 0 0 1-0.92-2.53A13.61 13.61 0 0 1 6.23 12c0-0.770.05-1.50.15-2.20.1-0.70.28-1.410.56-2.13A6.8 6.8 0 0 1 7.98 5.79a4.72 4.72 0 0 1 1.67-1.29C10.34 4.17 11.12 4 12 4c1.07 0 1.990.23 2.770.7a4.7 4.7 0 0 1 1.79 1.89c0.420.80.72 1.640.92 2.530.190.890.29 1.850.29 2.88 0 0.77-0.05 1.5-0.15 2.2a9.81 9.81 0 0 1-0.57 2.13 7.23 7.23 0 0 1-1.04 1.88c-0.420.53-0.970.96-1.66 1.29-0.690.33-1.470.5-2.350.5zm2.04-5.88c0.55-0.550.86-1.320.85-2.12 0-0.82-0.28-1.53-0.83-2.12C13.51 9.29 12.82 9 12 9c-0.82 0-1.510.29-2.060.88A2.99 2.99 0 0 0 9.12 12c0 0.820.28 1.530.83 2.120.550.59 1.240.88 2.060.880.82 0 1.5-0.29 2.04-0.88zM12 24c6.37 0 11.54-5.37 11.54-12S18.37 0 12 0 0.46 5.370.46 12 5.63 24 12 24Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiObservable;
