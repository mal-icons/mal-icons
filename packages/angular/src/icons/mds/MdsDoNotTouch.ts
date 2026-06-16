import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-do-not-touch",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsDoNotTouch {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m13 10.17-2.5-2.5V1H13v9.17zM20 4h-2.5v7h-1V2H14v9.17l6 6V4zM9.5 3H7.01v1.18L9.5 6.67V3zm11.69 18.19L2.81 2.81 1.39 4.22 7 9.83v4.3l-3.32-1.9L2 13.88 9.68 22h9.54l0.560.61 1.41-1.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsDoNotTouch;
