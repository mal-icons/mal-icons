import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-drone",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbDrone {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 10h4v4h-4l0 -4"}],["path",{"d":"M10 10l-3.5 -3.5"}],["path",{"d":"M9.96 6a3.5 3.5 0 1 0 -3.96 3.96"}],["path",{"d":"M14 10l3.5 -3.5"}],["path",{"d":"M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96"}],["path",{"d":"M14 14l3.5 3.5"}],["path",{"d":"M14.04 18a3.5 3.5 0 1 0 3.96 -3.96"}],["path",{"d":"M10 14l-3.5 3.5"}],["path",{"d":"M6 14.04a3.5 3.5 0 1 0 3.96 3.96"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbDrone;
