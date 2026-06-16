import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-auto-mode",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAutoMode {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.06 2.83c-1.15-0.77-2.46-1.32-3.86-1.61-0.62-0.12-1.20.35-1.20.99 0 0.460.310.880.760.97 1.170.23 2.260.7 3.21 1.340.390.260.90.19 1.23-0.140.46-0.450.39-1.2-0.14-1.55zM11 2.21c0-0.64-0.58-1.11-1.2-0.99-1.40.29-2.710.84-3.86 1.61-0.520.35-0.59 1.1-0.15 1.540.330.330.840.4 1.230.140.96-0.64 2.04-1.1 3.21-1.340.46-0.080.77-0.50.77-0.96zM4.38 5.79a1 1 0 0 0-1.540.15A10.66 10.66 0 0 0 1.23 9.8a1 1 0 0 0 0.98 1.2c0.46 0 0.88-0.310.97-0.760.23-1.170.7-2.26 1.34-3.220.25-0.380.18-0.9-0.14-1.23zM21.79 11a1 1 0 0 0 0.98-1.2c-0.29-1.4-0.84-2.7-1.61-3.86-0.35-0.52-1.1-0.6-1.54-0.15-0.330.33-0.40.84-0.14 1.230.640.96 1.1 2.05 1.34 3.220.090.450.510.760.970.76zM8 12.46l2.44 1.11 1.1 2.43a0.50.5 0 0 0 0.91 0l1.11-2.44 2.44-1.1a0.50.5 0 0 0 0-0.91l-2.44-1.11L12.46 8a0.50.5 0 0 0-0.91 0l-1.11 2.44L8 11.54c-0.390.18-0.390.74 0 0.92z"}],["path",{"d":"M12 21a8.96 8.96 0 0 1-7.46-4H6c0.55 0 1-0.45 1-1s-0.45-1-1-1H2c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1s1-0.45 1-1v-1.7c1.99 2.84 5.27 4.7 9 4.7 4.45 0 8.27-2.64 10-6.43a1.01 1.01 0 0 0-0.69-1.39c-0.45-0.1-0.930.11-1.120.54C18.77 18.83 15.64 21 12 21z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAutoMode;
