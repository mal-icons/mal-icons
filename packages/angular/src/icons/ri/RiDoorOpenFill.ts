import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-door-open-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDoorOpenFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 21V19L4 19V4.83C4 4.35 4.34 3.94 4.82 3.85L14.29 2.13C14.62 2.07 14.93 2.29 14.99 2.61C14.99 2.65 15 2.68 15 2.72V4L19 4C19.55 4 20 4.45 20 5V19L22 19V21H18V6L15 6V21H2ZM12 11H10V13H12V11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDoorOpenFill;
