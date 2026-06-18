import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-mug-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMugOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 5h5.92a1.08 1.08 0 0 1 1.08 1.08v5.92m-0.17 3.88a4.33 4.33 0 0 1 -4.17 3.12h-4.33c-2.39 0 -4.33 -1.93 -4.33 -4.31v-8.61a1.08 1.08 0 0 1 1.08 -1.08h0.92"}],["path",{"d":"M16 8h2.5c1.38 0 2.5 1.05 2.5 2.33v2.33c0 1.15 -0.89 2.1 -2.06 2.3"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMugOff;
