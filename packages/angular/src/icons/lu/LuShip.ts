import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-ship",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuShip {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 10.19V14"}],["path",{"d":"M12 2v3"}],["path",{"d":"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"}],["path",{"d":"M19.38 20A11.6 11.6 0 0 0 21 14l-8.19-3.64a2 2 0 0 0-1.62 0L3 14a11.6 11.6 0 0 0 2.81 7.76"}],["path",{"d":"M2 21c0.60.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.90.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.90.5 2.5 1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuShip;
