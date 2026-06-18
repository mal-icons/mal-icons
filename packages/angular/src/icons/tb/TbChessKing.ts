import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-chess-king",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbChessKing {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 16l-1.45 0.72a1 1 0 0 0 -0.55 0.89v2.38h12v-2.38a1 1 0 0 0 -0.55 -0.89l-1.45 -0.72h-8"}],["path",{"d":"M8.5 16a3.5 3.5 0 1 1 3.16 -5h0.67a3.5 3.5 0 1 1 3.16 5l-7 0"}],["path",{"d":"M9 6h6"}],["path",{"d":"M12 3v8"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbChessKing;
