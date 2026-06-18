import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-bell-ringing-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBellRinging2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.36 4.64a2 2 0 0 1 0 2.83a7 7 0 0 1 -1.41 7.07l-2.12 2.12a4 4 0 0 0 -0.71 3.54l-11.31 -11.31a4 4 0 0 0 3.54 -0.71l2.12 -2.12a7 7 0 0 1 7.07 -1.41a2 2 0 0 1 2.83 0"}],["path",{"d":"M7.34 12.41l-0.71 0.71a3 3 0 0 0 4.24 4.24l0.71 -0.71"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBellRinging2;
