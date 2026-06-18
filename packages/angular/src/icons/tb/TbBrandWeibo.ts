import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-weibo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandWeibo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 14.13c0 3.07 -3.5 5.87 -8 5.87c-4.13 0 -8 -2.22 -8 -5.56c0 -1.78 0.98 -3.74 2.7 -5.57c2.36 -2.51 5.19 -3.69 6.55 -2.24c0.42 0.44 0.75 1.39 0.75 2.06c2 -1.61 4.31 0.39 3.5 2.69c1.26 0.56 2.5 0.54 2.5 2.74"}],["path",{"d":"M15 4h1a5 5 0 0 1 5 5v1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandWeibo;
