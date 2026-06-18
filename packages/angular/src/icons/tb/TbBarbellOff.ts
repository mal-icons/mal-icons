import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-barbell-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBarbellOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 12h1"}],["path",{"d":"M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2"}],["path",{"d":"M6.3 6.29a1 1 0 0 0 -0.3 0.71v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-8"}],["path",{"d":"M9 12h3"}],["path",{"d":"M15 15v2a1 1 0 0 0 1 1h1c0.28 0 0.52 -0.11 0.7 -0.29m0.3 -3.71v-7a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1v4"}],["path",{"d":"M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1"}],["path",{"d":"M22 12h-1"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBarbellOff;
