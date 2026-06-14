import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-milk",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuMilk {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 2h8"}],["path",{"d":"M9 2v2.79a4 4 0 0 1-0.67 2.22l-0.660.98A4 4 0 0 0 7 10.21V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.79a4 4 0 0 0-0.67-2.22l-0.66-0.98A4 4 0 0 1 15 4.79V2"}],["path",{"d":"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuMilk;
