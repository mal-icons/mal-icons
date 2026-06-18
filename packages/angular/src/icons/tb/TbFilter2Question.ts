import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-filter-2-question",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbFilter2Question {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 6h16"}],["path",{"d":"M6 12h10.5"}],["path",{"d":"M9 18h5"}],["path",{"d":"M19 22v0.01"}],["path",{"d":"M19 19c0.45 0 0.88 -0.15 1.24 -0.43c0.35 -0.28 0.6 -0.67 0.71 -1.1c0.11 -0.44 0.06 -0.89 -0.12 -1.3c-0.19 -0.41 -0.5 -0.74 -0.9 -0.95c-0.4 -0.2 -0.85 -0.27 -1.29 -0.18c-0.44 0.09 -0.83 0.32 -1.12 0.66"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbFilter2Question;
