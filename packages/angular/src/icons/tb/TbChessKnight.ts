import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-chess-knight",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbChessKnight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 16l-1.45 0.72a1 1 0 0 0 -0.55 0.89v2.38h12v-2.38a1 1 0 0 0 -0.55 -0.89l-1.45 -0.72h-8"}],["path",{"d":"M9 3l1 3l-3.49 2.15a1 1 0 0 0 0.52 1.85h2.97l-2.07 6h7.96l0.11 -5c0 -3 -1.09 -5.98 -4 -7c-1.94 -0.68 -2.94 -1.01 -3 -1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbChessKnight;
