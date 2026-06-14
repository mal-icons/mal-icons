import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-puzzle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuPuzzle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.39 4.39a1 1 0 0 0 1.68-0.47 2.5 2.5 0 1 1 3.01 3.02 1 1 0 0 0-0.47 1.68l1.68 1.68a2.41 2.41 0 0 1 0 3.41L19.61 15.39a1 1 0 0 1-1.68-0.47 2.5 2.5 0 1 0-3.01 3.02 1 1 0 0 1 0.47 1.68l-1.68 1.68a2.41 2.41 0 0 1-3.41 0L8.61 19.61a1 1 0 0 0-1.680.47 2.5 2.5 0 1 1-3.01-3.01 1 1 0 0 0 0.47-1.68l-1.68-1.68a2.41 2.41 0 0 1 0-3.41L4.39 8.61a1 1 0 0 1 1.680.47 2.5 2.5 0 1 0 3.01-3.01 1 1 0 0 1-0.47-1.68l1.68-1.68a2.41 2.41 0 0 1 3.41 0z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuPuzzle;
