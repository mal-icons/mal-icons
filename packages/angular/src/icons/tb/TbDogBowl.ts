import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-dog-bowl",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbDogBowl {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 15l5.59 -5.58a2 2 0 1 1 3.41 -1.41a2 2 0 1 1 -1.41 3.41l-3.59 3.59"}],["path",{"d":"M12 13l-3.59 -3.58a2 2 0 1 0 -3.41 -1.41a2 2 0 1 0 1.41 3.41l3.59 3.59"}],["path",{"d":"M3 20h18c-0.17 -1.67 -0.05 -3.34 -2 -5h-14c-1.33 1 -2 2.67 -2 5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbDogBowl;
