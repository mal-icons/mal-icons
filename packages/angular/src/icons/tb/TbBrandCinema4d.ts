import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-cinema-4d",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandCinema4d {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.65 6.96a5.39 5.39 0 0 0 7.49 7.5"}],["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M17.7 12.14a5.74 5.74 0 1 1 -5.74 -5.74"}],["path",{"d":"M17.7 12.34v-1.17c0 -0.47 0.17 -0.92 0.48 -1.25a1.56 1.56 0 0 1 1.15 -0.52c0.83 0 1.52 0.68 1.62 1.57c0.04 0.34 0.06 0.69 0.06 1.04"}],["path",{"d":"M11.66 6.4h1.18c0.47 0 0.92 -0.18 1.25 -0.49c0.33 -0.31 0.52 -0.74 0.52 -1.18c0 -0.85 -0.68 -1.57 -1.57 -1.67a9.5 9.5 0 0 0 -1.04 -0.06"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandCinema4d;
