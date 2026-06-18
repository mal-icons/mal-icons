import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-patreon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandPatreon {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 8.41c0 -2.3 -1.75 -4.18 -3.79 -4.86c-2.54 -0.84 -5.89 -0.72 -8.31 0.45c-2.94 1.43 -3.86 4.55 -3.9 7.66c-0.03 2.56 0.22 9.3 3.92 9.35c2.75 0.04 3.16 -3.6 4.43 -5.36c0.91 -1.25 2.07 -1.6 3.51 -1.96c2.47 -0.63 4.15 -2.63 4.14 -5.27"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandPatreon;
