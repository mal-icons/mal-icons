import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-bunpo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandBunpo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.9 7.21a17.76 17.76 0 0 0 4.01 2.75a7.92 7.92 0 0 0 4.57 0.57c1.5 -0.33 2.91 -1 4.12 -1.96a12.11 12.11 0 0 0 2.89 -2.9c0.6 -0.94 0.75 -1.77 0.48 -2.23c-0.26 -0.46 -0.93 -0.57 -1.72 -0.26a7.56 7.56 0 0 0 -2.61 2.03a18.43 18.43 0 0 0 -2.59 3.88a34.93 34.93 0 0 0 -2.09 5.07a12.91 12.91 0 0 0 -0.68 3.52c-0.07 0.75 0.07 1.51 0.41 2.18c0.32 0.56 1.06 1.13 2.34 1.13c3.47 0 5.09 -3.53 5.46 -5.62c0.24 -1.36 -0.08 -3.2 -1.18 -4.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandBunpo;
