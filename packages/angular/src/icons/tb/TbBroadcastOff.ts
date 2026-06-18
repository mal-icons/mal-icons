import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-broadcast-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBroadcastOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.36 19.36a9 9 0 0 0 -9.72 -14.72m-2.49 1.51a9 9 0 0 0 -0.52 13.21"}],["path",{"d":"M15.54 16.54a5 5 0 0 0 -3.54 -8.54m-3 1a5 5 0 0 0 -0.53 7.54"}],["path",{"d":"M12 12a1 1 0 1 0 1 1"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBroadcastOff;
