import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-hand-fist",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuHandFist {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.04 17.01a3 3 0 0 0-3-3l-0.310a0.720.72 0 0 1-0.5-1.23l1.2-1.19A2 2 0 0 1 10.83 11H12a2 2 0 0 0 0-4H9.24a3 3 0 0 0-2.120.88l-2.71 2.71A4.83 4.83 0 0 0 3 14a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0"}],["path",{"d":"M13.89 9.66A2 2 0 0 0 17 8V5A2 2 0 1 0 13 5"}],["path",{"d":"M9 5A2 2 0 1 0 5 5V10"}],["path",{"d":"M9 7V4A2 2 0 1 1 13 4V7.27"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuHandFist;
