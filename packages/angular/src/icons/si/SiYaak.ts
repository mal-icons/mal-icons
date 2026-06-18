import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-yaak",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiYaak {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12c1.26 0 2.47-0.19 3.62-0.56-0.27-0.83-0.48-1.57-0.72-1.5C8.61 23.93 1.67 18.25 1.67 12 1.67 6.29 7.79-0.04 14.7 1.78c0.180.05 1.36-0.4 2.19-0.74A11.95 11.95 0 0 0 12 0m6.37 1.83c-1.870.71-6.18 2.14-7.33 3.73-2.680-3.670.53-4.070.81-0.320.23-0.41 2.03-0.41 2.03h-0.81l-0.41-1.63s-3.97 4.5 1.22 4.47c0.2 1.340.15 3.970.41 5.70.27 1.81 4.18 3.74 5.29 3.660.58-0.040.36-1.650.41-2.44 2.350.8 3.65 1.98 4.29 4.76C21.11 21.05 24 16.86 24 12c0-4.28-2.25-8.05-5.63-10.17m-2.81 4.12c0.67-0.06 6.56 2.54 4.43 4.45-0.570.21-1.270.2-1.780.21-2.20.07-3.01-0.61-3.42-1.38-0.23-0.42-0.62-1.08-0.49-1.240.670 1.5-0.03 2.03 0-0.19-0.29-1.4-1.6-0.81-2.03a0.10.1 0 0 1 0.05-0.01m-3.46 6.17a1.12 1.12 0 1 1 0 2.25 1.12 1.12 0 0 1 0-2.25"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiYaak;
