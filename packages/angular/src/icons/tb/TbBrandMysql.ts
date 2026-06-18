import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-mysql",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandMysql {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 21c-1.43 -1.03 -3.59 -3.85 -4 -6c-0.49 0.77 -1.5 2 -2 2c-1.5 -0.89 -0.57 -3.97 0 -6c-1.6 -1.43 -2.47 -2.46 -2.5 -4c-3.35 -3.44 -0.44 -5.27 2.5 -3h1c8.48 0.5 6.42 8.07 9 11.5c2.3 0.52 3.67 2.25 5 3.5c-2.09 -0.2 -2.78 -0.34 -3.5 0c0.48 1.64 2.12 2.2 3.5 3"}],["path",{"d":"M9 7h0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandMysql;
