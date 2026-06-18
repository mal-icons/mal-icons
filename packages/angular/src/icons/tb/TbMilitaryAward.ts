import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-military-award",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMilitaryAward {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 13a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M8.5 10.5l-1 -2.5h-5.5l2.48 5.79a2 2 0 0 0 1.84 1.21h2.18"}],["path",{"d":"M15.5 10.5l1 -2.5h5.5l-2.48 5.79a2 2 0 0 1 -1.84 1.21h-2.18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMilitaryAward;
