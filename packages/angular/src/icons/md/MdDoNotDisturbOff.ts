import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-do-not-disturb-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdDoNotDisturbOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.94 5.12C9.14 4.41 10.52 4 12 4c4.41 0 8 3.59 8 8 0 1.48-0.41 2.86-1.12 4.06l1.46 1.46A9.97 9.97 0 0 0 22 12c0-5.52-4.48-10-10-10-2.04 0-3.930.61-5.51 1.66l1.45 1.46zM2.81 2.81 1.39 4.22l2.27 2.27A9.91 9.91 0 0 0 2 12c0 5.52 4.48 10 10 10 2.04 0 3.93-0.61 5.51-1.66l2.27 2.27 1.41-1.41L2.81 2.81zM12 20c-4.41 0-8-3.59-8-8 0-1.480.41-2.86 1.12-4.06L8.17 11H7v2h3.17l5.88 5.88A7.87 7.87 0 0 1 12 20z"}],["path",{"d":"m13.83 11 2 2H17v-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdDoNotDisturbOff;
