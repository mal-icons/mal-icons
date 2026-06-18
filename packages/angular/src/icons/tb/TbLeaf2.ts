import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-leaf-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbLeaf2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 21c0.5 -4.5 2.5 -8 7 -10"}],["path",{"d":"M7.5 15q -3.5 0 -4.5 -6a8.4 8.4 0 0 1 3.44 0.4a12 12 0 0 1 -0.05 -0.79c0 -3.61 3.2 -5.61 3.2 -5.61s2 1.25 2.84 3.56q 2.57 -1.56 6.57 -1.56q 0.4 3.78 -1.56 6.57c2.31 0.84 3.56 2.84 3.56 2.84s-3 2.59 -7 2.59c0 1 0 1 0.5 3q -6 0 -7 -5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbLeaf2;
