import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-cricket",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCricket {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.11 18.79l-1 0.99a4.16 4.16 0 0 1 -6.04 -5.71l0.16 -0.17l8.28 -8.4l1.5 1.5l3.45 -3.39a2.08 2.08 0 0 1 3.06 2.82l-0.12 0.13l-3.39 3.45l1.5 1.5l-3.67 3.62"}],["path",{"d":"M10.5 7.5l6 6"}],["path",{"d":"M11 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCricket;
