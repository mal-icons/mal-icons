import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-auto-fix-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsAutoFixOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m20 7 0.94-2.06L23 4l-2.06-0.94L20 1l-0.94 2.06L17 4l2.060.94zm-5.83 1.42 1.41 1.41-1.46 1.46 1.42 1.42 2.87-2.88-4.24-4.24-2.88 2.87 1.42 1.42zM1.39 4.22l7.07 7.07-6.87 6.88 4.24 4.24 6.88-6.87 7.07 7.07 1.41-1.42L2.81 2.81z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsAutoFixOff;
