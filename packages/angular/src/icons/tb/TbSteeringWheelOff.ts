import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-steering-wheel-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSteeringWheelOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.04 16.05a9 9 0 0 0 -12.08 -12.09m-2.32 1.68a9 9 0 1 0 12.74 12.72"}],["path",{"d":"M10.6 10.58a2 2 0 1 0 2.83 2.83"}],["path",{"d":"M12 14v7"}],["path",{"d":"M10 12l-6.75 -2"}],["path",{"d":"M15.54 11.54l5.21 -1.54"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSteeringWheelOff;
