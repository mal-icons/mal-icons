import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-gavel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbGavel {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 10l7.38 7.42c0.82 0.82 0.82 2.15 0 2.97a2.11 2.11 0 0 1 -2.98 0l-7.41 -7.38"}],["path",{"d":"M6 9l4 4"}],["path",{"d":"M13 10l-4 -4"}],["path",{"d":"M3 21h7"}],["path",{"d":"M6.79 15.79l-3.59 -3.59a1 1 0 0 1 0 -1.41l2.29 -2.29l0.5 0.5l3 -3l-0.5 -0.5l2.29 -2.29a1 1 0 0 1 1.41 0l3.59 3.59a1 1 0 0 1 0 1.41l-2.29 2.29l-0.5 -0.5l-3 3l0.5 0.5l-2.29 2.29a1 1 0 0 1 -1.41 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbGavel;
