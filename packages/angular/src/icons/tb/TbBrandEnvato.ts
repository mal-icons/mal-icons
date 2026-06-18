import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-envato",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandEnvato {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.71 17.88c-0.53 -1.34 -1.35 -4.18 0.13 -6.47c1.42 -2.19 3.77 -3.61 5.1 -4.28l-5.23 10.75l0 0"}],["path",{"d":"M19.72 12.51c-0.54 3.41 -2.09 6.16 -4.15 7.35c-4.07 2.35 -8.14 0.45 -9.3 -0.19c0.88 -1.44 4.43 -7.22 6.88 -10.59c2.71 -3.74 5.86 -5.98 6.57 -6.08c0 0.2 0.03 0.55 0.07 1.03c0.14 1.71 0.44 5.26 -0.07 8.48"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandEnvato;
