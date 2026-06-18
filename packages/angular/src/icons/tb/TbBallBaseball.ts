import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-ball-baseball",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBallBaseball {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.64 18.36a9 9 0 1 0 12.73 -12.73a9 9 0 0 0 -12.73 12.73"}],["path",{"d":"M12.5 3.02a9 9 0 0 1 -9.47 9.48"}],["path",{"d":"M20.98 11.51a9 9 0 0 0 -9.47 9.48"}],["path",{"d":"M9 9l2 2"}],["path",{"d":"M13 13l2 2"}],["path",{"d":"M11 7l2 1"}],["path",{"d":"M7 11l1 2"}],["path",{"d":"M16 11l1 2"}],["path",{"d":"M11 16l2 1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBallBaseball;
