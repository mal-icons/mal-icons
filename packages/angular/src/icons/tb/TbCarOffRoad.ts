import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-car-off-road",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCarOffRoad {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 17h6"}],["path",{"d":"M9 17a2 2 0 1 1 -4 0a2 2 0 0 1 4 0"}],["path",{"d":"M19 17a2 2 0 1 1 -4 0a2 2 0 0 1 4 0"}],["path",{"d":"M17 10l-2 -3"}],["path",{"d":"M19 17h2v-5a2 2 0 0 0 -2 -2h-5v2h-2.59a1 1 0 0 1 -0.71 -0.29l-1.12 -1.12a2 2 0 0 0 -1.41 -0.59h-4.17a1 1 0 0 0 -1 1v6h2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCarOffRoad;
