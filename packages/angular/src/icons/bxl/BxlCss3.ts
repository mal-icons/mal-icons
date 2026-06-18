import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-css3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlCss3 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.19 3.14h15.62l-1.42 16.03-6.4 1.81-6.37-1.81L4.19 3.14zM16.9 6.42l-9.800.16 1.95 7.530-0.19 2.02H9.66l0.18 1.91h4.6l-0.27 2.62-2.160.6-2.2-0.6-0.14-1.57h-1.94l0.22 2.87L12 17.48l4-1.140.91-9.92z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlCss3;
