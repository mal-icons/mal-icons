import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-variable-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbVariablePlus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 4c-2.5 5 -2.5 10 0 16m14 -16c1.38 2.76 2 5.52 1.86 8.45m-11.85 -3.45h1c1 0 1 1 2.02 3.53c0.79 1.97 0.94 3.01 1.48 3.35"}],["path",{"d":"M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16v6"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbVariablePlus;
