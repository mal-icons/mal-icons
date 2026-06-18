import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-cast-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCastOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 19h0.01"}],["path",{"d":"M7 19a4 4 0 0 0 -4 -4"}],["path",{"d":"M11 19a8 8 0 0 0 -8 -8"}],["path",{"d":"M15 19h3a3 3 0 0 0 0.88 -0.13m2 -2a3 3 0 0 0 0.13 -0.87v-8a3 3 0 0 0 -3 -3h-9m-3.86 0.14a3 3 0 0 0 -1.93 1.86"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCastOff;
