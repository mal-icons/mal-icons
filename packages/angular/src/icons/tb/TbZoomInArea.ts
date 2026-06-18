import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-zoom-in-area",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbZoomInArea {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 13v4"}],["path",{"d":"M13 15h4"}],["path",{"d":"M10 15a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"}],["path",{"d":"M22 22l-3 -3"}],["path",{"d":"M6 18h-1a2 2 0 0 1 -2 -2v-1"}],["path",{"d":"M3 11v-1"}],["path",{"d":"M3 6v-1a2 2 0 0 1 2 -2h1"}],["path",{"d":"M10 3h1"}],["path",{"d":"M15 3h1a2 2 0 0 1 2 2v1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbZoomInArea;
