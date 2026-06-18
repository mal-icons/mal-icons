import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-chess-bishop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbChessBishop {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 16l-1.45 0.72a1 1 0 0 0 -0.55 0.89v2.38h12v-2.38a1 1 0 0 0 -0.55 -0.89l-1.45 -0.72h-8"}],["path",{"d":"M11 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M9.5 16c-1.67 0 -2.5 -1.67 -2.5 -3c0 -3.67 1.67 -6 5 -7c3.33 1 5 3.43 5 7c0 1.28 -0.77 2.88 -2.33 3l-0.17 0h-5"}],["path",{"d":"M15 8l-3 3"}],["path",{"d":"M12 5v1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbChessBishop;
