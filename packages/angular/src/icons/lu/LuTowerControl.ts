import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-tower-control",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuTowerControl {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 0.950.73h10.5a1 1 0 0 0 0.96-0.73Z"}],["path",{"d":"M8 13v9"}],["path",{"d":"M16 22v-9"}],["path",{"d":"m9 6 1 7"}],["path",{"d":"m15 6-1 7"}],["path",{"d":"M12 6V2"}],["path",{"d":"M13 2h-2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuTowerControl;
