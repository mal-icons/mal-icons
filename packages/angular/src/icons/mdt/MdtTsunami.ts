import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-tsunami",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtTsunami {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.04 14c0.47-0.240.68-0.41 1.3-0.87 2 1.48 3.07 1.39 3.79 1.32A7.47 7.47 0 0 1 8 10.5c0-1.670.54-3.21 1.47-4.46C6.41 7.52 4.3 10.46 4.04 14z","opacity":".3"}],["path",{"d":"M12 17.63c-0.660.49-2.92 2.76-6.67 0C3.43 19.03 2.65 19 2 19v2c1.16 0 2.3-0.32 3.33-0.93a6.54 6.54 0 0 0 6.67 0 6.54 6.54 0 0 0 6.67 0c1.030.61 2.170.93 3.330.93v-2c-0.66 0-1.5-0.02-3.33-1.37-3.8 2.8-6.130.4-6.67 0zM19.33 12H22v-2h-2.67C17.5 10 16 8.5 16 6.67c0-1.020.38-1.74 1.09-3.34-1.37-0.21-2-0.33-3.09-0.33C7.36 3 2.15 8.03 2.01 14.5l-0.01 2c1.16 0 2.3-0.32 3.33-0.93a6.54 6.54 0 0 0 6.67 0 6.54 6.54 0 0 0 6.67 0c1.030.61 2.170.93 3.330.93v-2c-0.66 0-1.5-0.02-3.33-1.37-3.8 2.8-6.120.4-6.67 0-0.90.67-0.540.41-0.910.63-0.7-0.94-1.09-2.06-1.09-3.26 0-2.58 1.77-4.74 4.21-5.33-0.130.51-0.21 1.02-0.21 1.5C14 9.61 16.39 12 19.33 12zm-10.2 2.45c-0.720.07-1.790.16-3.79-1.32-0.620.46-0.820.63-1.30.870.27-3.53 2.38-6.48 5.43-7.96A7.43 7.43 0 0 0 8 10.5c0 1.420.4 2.77 1.13 3.95z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtTsunami;
