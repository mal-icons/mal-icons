import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-puzzle-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPuzzle2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12"}],["path",{"d":"M12 4v2.5a0.5 0.5 0 0 1 -0.5 0.5a1.5 1.5 0 0 0 0 3a0.5 0.5 0 0 1 0.5 0.5v1.5"}],["path",{"d":"M12 12v1.5a0.5 0.5 0 0 0 0.5 0.5a1.5 1.5 0 0 1 0 3a0.5 0.5 0 0 0 -0.5 0.5v2.5"}],["path",{"d":"M20 12h-2.5a0.5 0.5 0 0 1 -0.5 -0.5a1.5 1.5 0 0 0 -3 0a0.5 0.5 0 0 1 -0.5 0.5h-1.5"}],["path",{"d":"M12 12h-1.5a0.5 0.5 0 0 0 -0.5 0.5a1.5 1.5 0 0 1 -3 0a0.5 0.5 0 0 0 -0.5 -0.5h-2.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPuzzle2;
