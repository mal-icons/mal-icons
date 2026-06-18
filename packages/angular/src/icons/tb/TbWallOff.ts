import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-wall-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbWallOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 4h10a2 2 0 0 1 2 2v10m-0.59 3.42c-0.36 0.36 -0.86 0.58 -1.41 0.58h-12a2 2 0 0 1 -2 -2v-12c0 -0.55 0.22 -1.05 0.58 -1.41"}],["path",{"d":"M4 8h4m4 0h8"}],["path",{"d":"M20 12h-4m-4 0h-8"}],["path",{"d":"M4 16h12"}],["path",{"d":"M9 4v1"}],["path",{"d":"M14 8v2"}],["path",{"d":"M8 12v4"}],["path",{"d":"M11 16v4"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbWallOff;
