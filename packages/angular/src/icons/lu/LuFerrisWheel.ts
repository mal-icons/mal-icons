import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-ferris-wheel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuFerrisWheel {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"12","r":"2"}],["path",{"d":"M12 2v4"}],["path",{"d":"m6.8 15-3.5 2"}],["path",{"d":"m20.7 7-3.5 2"}],["path",{"d":"M6.8 9 3.3 7"}],["path",{"d":"m20.7 17-3.5-2"}],["path",{"d":"m9 22 3-8 3 8"}],["path",{"d":"M8 22h8"}],["path",{"d":"M18 18.7a9 9 0 1 0-12 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuFerrisWheel;
