import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-priority-high",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPriorityHigh {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M479.91-120Q451-120 430.5-140.59q-20.5-20.59-20.5-49.5Q410-219 430.59-239.5q20.59-20.5 49.5-20.5Q509-260 529.5-239.41q20.5 20.59 20.5 49.5Q550-161 529.41-140.5q-20.59 20.5-49.5 20.5ZM410-360v-480h140v480H410Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPriorityHigh;
