import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-spy-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSpyOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 11h8m4 0h6"}],["path",{"d":"M5 11v-4c0 -0.57 0.16 -1.1 0.44 -1.56m2.56 -1.44h8a3 3 0 0 1 3 3v4"}],["path",{"d":"M4 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M14.88 14.88a3 3 0 1 0 4.24 4.25m0.59 -3.41a3.01 3.01 0 0 0 -1.42 -1.42"}],["path",{"d":"M10 17h4"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSpyOff;
