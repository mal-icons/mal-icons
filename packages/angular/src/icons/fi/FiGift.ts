import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fi-gift",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
export class FiGift {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["polyline",{"points":"20 12 20 22 4 22 4 12"}],["rect",{"x":"2","y":"7","width":"20","height":"5"}],["line",{"x1":"12","y1":"22","x2":"12","y2":"7"}],["path",{"d":"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"}],["path",{"d":"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}
