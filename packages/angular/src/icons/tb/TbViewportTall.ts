import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-viewport-tall",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbViewportTall {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 10v-7l3 3"}],["path",{"d":"M9 6l3 -3"}],["path",{"d":"M12 14v7l3 -3"}],["path",{"d":"M9 18l3 3"}],["path",{"d":"M18 3h1a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-1"}],["path",{"d":"M6 3h-1a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbViewportTall;
