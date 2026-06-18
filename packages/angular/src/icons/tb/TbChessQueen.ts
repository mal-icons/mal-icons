import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-chess-queen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbChessQueen {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 16l2 -11l-4 4l-2 -5l-2 5l-4 -4l2 11"}],["path",{"d":"M8 16l-1.45 0.72a1 1 0 0 0 -0.55 0.89v2.38h12v-2.38a1 1 0 0 0 -0.55 -0.89l-1.45 -0.72h-8"}],["path",{"d":"M11 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M5 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M17 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbChessQueen;
