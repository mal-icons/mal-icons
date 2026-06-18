import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-middleware",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMiddleware {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 20l2.25 -2.25"}],["path",{"d":"M20 20l-2.25 -2.25"}],["path",{"d":"M20 4l-2.25 2.25"}],["path",{"d":"M4 4l2.25 2.25"}],["path",{"d":"M10 19.75a8.01 8.01 0 0 1 -5.75 -5.75"}],["path",{"d":"M19.75 14a8.01 8.01 0 0 1 -5.75 5.75"}],["path",{"d":"M4.25 10a8.02 8.02 0 0 1 5.48 -5.67l0.27 -0.07"}],["path",{"d":"M14 4.25a8.01 8.01 0 0 1 5.75 5.75"}],["path",{"d":"M11 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMiddleware;
