import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-hackerrank",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandHackerrank {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.48 5.67c-1.15 -0.9 -3.35 -2.39 -6.5 -3.43c-0.48 -0.16 -0.72 -0.24 -1.04 -0.24c-0.31 0 -0.56 0.08 -1.04 0.24c-3.15 1.03 -5.35 2.53 -6.5 3.43c-0.4 0.32 -0.6 0.48 -0.8 0.82c-0.19 0.34 -0.23 0.62 -0.31 1.18a33 33 0 0 0 -0.3 4.34c0 1.74 0.17 3.32 0.31 4.34c0.08 0.56 0.12 0.84 0.31 1.18c0.19 0.34 0.4 0.5 0.8 0.82c1.15 0.9 3.35 2.39 6.5 3.43c0.48 0.16 0.73 0.24 1.04 0.24c0.31 0 0.56 -0.08 1.04 -0.24c3.15 -1.03 5.35 -2.52 6.5 -3.43c0.4 -0.32 0.6 -0.48 0.8 -0.82c0.19 -0.34 0.23 -0.62 0.31 -1.18c0.14 -1.02 0.31 -2.6 0.31 -4.34s-0.16 -3.32 -0.3 -4.34c-0.08 -0.56 -0.11 -0.84 -0.31 -1.18s-0.39 -0.5 -0.8 -0.82"}],["path",{"d":"M9 8v7"}],["path",{"d":"M9 12h6"}],["path",{"d":"M16 16h-2l1 1l1 -1"}],["path",{"d":"M8 8h2l-1 -1l-1 1"}],["path",{"d":"M15 9v7"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandHackerrank;
