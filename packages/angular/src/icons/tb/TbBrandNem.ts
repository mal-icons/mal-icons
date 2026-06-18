import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-nem",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandNem {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.18 2c1.94 0.02 3.88 0.38 5.82 1.08l0.36 0.14a23.08 23.08 0 0 1 3.64 1.79c0 5.62 -1.96 10.26 -5.87 13.92c-1.24 1.24 -2.5 2.2 -3.78 2.9l-0.35 0.18c-1.4 -0.7 -2.78 -1.73 -4.13 -3.08c-3.91 -3.66 -5.87 -8.3 -5.87 -13.92c2.55 -1.53 5.09 -2.47 7.64 -2.83l0.36 -0.05a16.79 16.79 0 0 1 1.82 -0.12h0.36"}],["path",{"d":"M2.1 7.07c2.07 6.72 5.37 7.7 9.9 2.93c0 -4 1.36 -6.35 4.07 -7.06l0.59 -0.11"}],["path",{"d":"M16.35 18.51s2.65 -5.51 -4.35 -8.51"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandNem;
