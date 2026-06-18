import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-hexagon-number-7",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbHexagonNumber7 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.02 6.86a2 2 0 0 1 1 1.75v6.56c0 0.73 -0.39 1.4 -1.03 1.75l-6.02 3.84a2 2 0 0 1 -1.95 0l-6.02 -3.84a2 2 0 0 1 -1.03 -1.75v-6.56c0 -0.73 0.4 -1.4 1.03 -1.75l6.02 -3.58a2.06 2.06 0 0 1 2 0l6.02 3.58h-0.03l0.01 0"}],["path",{"d":"M10 8h4l-2 8"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbHexagonNumber7;
