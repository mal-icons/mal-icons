import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-viewport-narrow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbViewportNarrow {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 12h7l-3 -3"}],["path",{"d":"M7 15l3 -3"}],["path",{"d":"M21 12h-7l3 -3"}],["path",{"d":"M17 15l-3 -3"}],["path",{"d":"M9 6v-1a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1"}],["path",{"d":"M9 18v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbViewportNarrow;
