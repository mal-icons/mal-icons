import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-trolley",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbTrolley {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M6 16l3 2"}],["path",{"d":"M12 17l8 -12"}],["path",{"d":"M17 10l2 1"}],["path",{"d":"M9.59 4.7l3.31 2.1a1.3 1.3 0 0 1 0.4 1.8l-3.09 4.81a1.3 1.3 0 0 1 -1.79 0.39l-3.31 -2.1a1.3 1.3 0 0 1 -0.4 -1.8l3.09 -4.81a1.3 1.3 0 0 1 1.79 -0.39"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbTrolley;
