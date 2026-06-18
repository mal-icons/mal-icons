import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-adonis-js",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandAdonisJs {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9"}],["path",{"d":"M8.86 16.92c1.14 -0.42 1.64 -0.92 3.14 -0.92s2 0.5 3.14 0.92c0.71 0.26 1.52 -0.1 1.78 -0.77c0.13 -0.32 0.11 -0.67 -0.04 -0.98l-3.71 -7.47c-0.3 -0.6 -1.06 -0.86 -1.7 -0.58a1.24 1.24 0 0 0 -0.63 0.58l-3.71 7.47c-0.32 0.65 -0.02 1.42 0.68 1.71c0.33 0.14 0.72 0.17 1.06 0.04l0 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandAdonisJs;
