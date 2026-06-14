import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-volume-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiVolumeUp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.71 10.29c-0.39-0.39-1.02-0.39-1.410-0.390.39-0.39 1.020 1.410.350.350.540.80.54 1.29 0 0.49-0.190.95-0.54 1.29-0.390.39-0.39 1.02 0 1.410.20.20.450.290.710.29s0.51-0.10.71-0.29c0.72-0.72 1.12-1.68 1.12-2.71s-0.4-1.98-1.12-2.71zM18.71 8.29c-0.39-0.39-1.02-0.39-1.410-0.390.39-0.39 1.020 1.410.880.88 1.36 2.04 1.36 3.290 1.25-0.48 2.42-1.36 3.3-0.390.39-0.39 1.02 0 1.410.20.20.450.290.710.29s0.51-0.10.71-0.29c1.26-1.26 1.95-2.93 1.95-4.710-1.78-0.69-3.45-1.95-4.7zM20.71 6.29c-0.39-0.39-1.02-0.39-1.410-0.390.39-0.39 1.020 1.41 1.41 1.41 2.19 3.29 2.19 5.280 2-0.78 3.89-2.19 5.3-0.390.39-0.39 1.02 0 1.410.20.20.450.290.710.29s0.51-0.10.71-0.29c1.79-1.79 2.78-4.18 2.78-6.720-2.53-0.99-4.91-2.78-6.7zM12.14 5.82c-0.45 0-0.90.15-1.360.45l-2.67 1.78c-0.750.5-2.20.94-3.110.94-1.65 0-3 1.35-3 3v2c0 1.65 1.35 3 3 3 0.9 0 2.360.44 3.110.94l2.67 1.78c0.450.30.910.45 1.360.450.90 1.86-0.68 1.86-2.17v-10c0-1.49-0.96-2.18-1.86-2.18zm-7.14 9.18c-0.55 0-1-0.45-1-1v-2c0-0.550.45-1 1-1 1.21 0 2.91-0.49 4-1.15v6.29c-1.09-0.65-2.79-1.15-4-1.15zm7 3l-0.010.12-0.1-0.06-1.89-1.26v-7.6l1.89-1.260.1-0.060.010.12v10z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiVolumeUp;
