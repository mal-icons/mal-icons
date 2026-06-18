import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-roulette",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbRoulette {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.59 10.59l-1.59 -1.59"}],["path",{"d":"M13.41 10.59l1.59 -1.59"}],["path",{"d":"M13.41 13.41l1.59 1.59"}],["path",{"d":"M10.59 13.41l-1.59 1.59"}],["path",{"d":"M14 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0"}],["path",{"d":"M16.5 4.21l-0.5 0.87"}],["path",{"d":"M7.5 19.79l0.5 -0.87"}],["path",{"d":"M19.79 7.5l-0.87 0.5"}],["path",{"d":"M4.21 16.5l0.87 -0.5"}],["path",{"d":"M7.5 4.21l0.5 0.87"}],["path",{"d":"M16.5 19.79l-0.5 -0.87"}],["path",{"d":"M4.21 7.5l0.87 0.5"}],["path",{"d":"M19.79 16.5l-0.87 -0.5"}],["path",{"d":"M12 3v1"}],["path",{"d":"M12 21v-1"}],["path",{"d":"M21 12h-1"}],["path",{"d":"M3 12h1"}],["path",{"d":"M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbRoulette;
