import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-foodsteps",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbFoodsteps {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 16.5a2.5 2.5 0 0 0 5 0a1.5 1.5 0 0 0 -1.5 -1.5h-2a1.5 1.5 0 0 0 -1.5 1.5"}],["path",{"d":"M15 18.5a2.5 2.5 0 0 0 5 0a1.5 1.5 0 0 0 -1.5 -1.5h-2a1.5 1.5 0 0 0 -1.5 1.5"}],["path",{"d":"M8.52 12h-4.04c-0.35 0 -0.68 -0.18 -0.82 -0.5c-1.33 -2.9 -0.77 -8.5 2.84 -8.5s4.17 5.6 2.84 8.5c-0.14 0.32 -0.47 0.5 -0.82 0.5"}],["path",{"d":"M19.52 14h-4.04c-0.35 0 -0.68 -0.18 -0.82 -0.5c-1.33 -2.9 -0.77 -8.5 2.84 -8.5s4.17 5.6 2.84 8.5c-0.14 0.32 -0.47 0.5 -0.82 0.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbFoodsteps;
