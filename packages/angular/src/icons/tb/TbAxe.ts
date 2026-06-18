import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-axe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbAxe {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 9l7.38 7.42c0.82 0.82 0.82 2.15 0 2.97a2.11 2.11 0 0 1 -2.98 0l-7.41 -7.38"}],["path",{"d":"M6.66 15.66l-3.32 -3.32a1.25 1.25 0 0 1 0.42 -2.04l3.24 -1.3l6 -6l3 3l-6 6l-1.3 3.24a1.25 1.25 0 0 1 -2.04 0.42"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbAxe;
