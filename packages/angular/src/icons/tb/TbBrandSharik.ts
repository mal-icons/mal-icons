import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-sharik",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandSharik {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.28 16.61a8.97 8.97 0 0 1 1.36 -10.98a9.03 9.03 0 0 1 11.01 -1.35c-1.58 4.69 -2.41 6.96 -4.65 8.72c-1.58 1.24 -3.84 2.24 -7.72 3.61m16.34 -7.31c2.11 7.59 -4.89 13.36 -11.3 11.26c1.93 -3.1 3.24 -4.61 4.69 -6.06c1.71 -1.71 3.59 -3.23 6.62 -5.2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandSharik;
