import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-surfshark",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandSurfshark {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.95 9.45c-0.24 -6.22 0 -6.22 -6 -6.42c-5.77 -0.21 -6.82 1 -7.91 5.38c-2.88 11.82 -3.84 14.72 4.79 11.2c9.39 -3.83 9.3 -5.38 9.11 -10.15l0 0"}],["path",{"d":"M8 16h0.45c1.94 0.01 3.53 -1.46 3.54 -3.29v-2.43c0.02 -1.83 1.61 -3.3 3.55 -3.29h0.45"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandSurfshark;
