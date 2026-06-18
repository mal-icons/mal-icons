import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-spring-boot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlSpringBoot {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.2 16.39c-2.47 3.29-7.74 2.18-11.12 2.34 0 0-0.60.03-1.20.13 0 0 0.23-0.10.52-0.2 2.37-0.82 3.5-0.99 4.94-1.73 2.71-1.39 5.41-4.41 5.96-7.55-1.03 3.02-4.17 5.62-7.03 6.68-1.950.72-5.49 1.42-5.49 1.42a5.28 5.28 0 0 1-0.14-0.08c-2.4-1.17-2.47-6.38 1.89-8.06 1.92-0.74 3.75-0.33 5.82-0.82 2.21-0.52 4.77-2.18 5.81-4.34 1.17 3.46 2.57 8.870.05 12.21zm0.04-13.28a9.21 9.21 0 0 1-1.06 1.89 9.98 9.98 0 0 0-7.17-3.03C6.49 1.97 2 6.46 2 11.99a9.98 9.98 0 0 0 3.21 7.33l0.220.19a0.860.86 0 1 1 00l0.150.13A9.96 9.96 0 0 0 12.02 22c5.28 0 9.61-4.11 9.98-9.290.27-2.54-0.48-5.76-1.75-9.6"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlSpringBoot;
