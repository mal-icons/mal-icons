import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-arrows-random",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbArrowsRandom {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 21h-4v-4"}],["path",{"d":"M16 21l5 -5"}],["path",{"d":"M6.5 9.5l-3.5 -2l2 -3.5"}],["path",{"d":"M3 7.5l6.83 -1.87"}],["path",{"d":"M4 16l4 -1l1 4"}],["path",{"d":"M8 15l-3.5 6"}],["path",{"d":"M21 5l-0.5 4l-4 -0.5"}],["path",{"d":"M20.5 9l-4.5 -5.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbArrowsRandom;
