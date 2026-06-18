import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-building-carousel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBuildingCarousel {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 12a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"}],["path",{"d":"M3 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M10 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 16a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 16a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M8 22l4 -10l4 10"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBuildingCarousel;
