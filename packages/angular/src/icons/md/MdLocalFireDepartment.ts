import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-local-fire-department",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdLocalFireDepartment {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m16 6-0.440.55c-0.420.52-0.980.75-1.540.75C13 7.3 12 6.52 12 5.3V2S4 6 4 13c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.96-1.61-5.62-4-7zm-4 13c-1.1 0-2-0.87-2-1.94 0-0.510.2-0.990.58-1.36L12 14.3l1.43 1.4c0.370.370.570.850.57 1.36 0 1.07-0.9 1.94-2 1.94zm3.96-1.5c0.04-0.360.22-1.89-1.13-3.22L12 11.5l-2.83 2.78C7.81 15.62 8 17.16 8.04 17.5A5.98 5.98 0 0 1 6 13c0-3.16 2.13-5.65 4.03-7.25a4.02 4.02 0 0 0 3.99 3.55c0.78 0 1.54-0.23 2.18-0.66A6.18 6.18 0 0 1 18 13c0 1.79-0.79 3.4-2.04 4.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdLocalFireDepartment;
