import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-hexagon-3d",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbHexagon3d {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 6.84a2.01 2.01 0 0 1 1 1.75v6.56c0 0.73 -0.39 1.4 -1.03 1.75l-6 3.84a2 2 0 0 1 -1.94 0l-6 -3.84a2.01 2.01 0 0 1 -1.03 -1.75v-6.56c0 -0.73 0.39 -1.4 1.03 -1.75l6 -3.58a2.05 2.05 0 0 1 2 0l6 3.58h-0.03l0 0"}],["path",{"d":"M12 16.5v4.5"}],["path",{"d":"M4.5 7.5l3.5 2.5"}],["path",{"d":"M16 10l4 -2.5"}],["path",{"d":"M12 7.5v4.5l-4 2"}],["path",{"d":"M12 12l4 2"}],["path",{"d":"M12 16.5l4 -2.5v-4l-4 -2.5l-4 2.5v4l4 2.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbHexagon3d;
