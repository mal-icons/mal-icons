import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-disqus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandDisqus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.85 21c-2.26 0 -4.32 -0.67 -5.92 -2h-3.93l1.71 -3.27c-0.55 -1.17 -0.76 -2.45 -0.76 -3.73c0 -4.97 3.84 -9 8.9 -9c5.05 0 9.15 4.03 9.15 9c0 4.97 -4.1 9 -9.15 9"}],["path",{"d":"M11.49 15h-1.48v-6h1.49c2.11 0 3.52 0.82 3.52 2.98v0.04c0 2.18 -1.4 2.98 -3.51 2.98"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandDisqus;
