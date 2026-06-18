import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-zoom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandZoom {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.01 9.39v5.13l3.99 3.49v-12l-3.99 3.39"}],["path",{"d":"M3.89 6h10.08c1.47 0 3.03 1.2 3.03 2.8v8.2a0.99 0.99 0 0 1 -0.97 1h-10.37c-1.67 0 -2.65 -1.5 -2.65 -3l0.01 -8a0.88 0.88 0 0 1 0.21 -0.71a0.84 0.84 0 0 1 0.67 -0.29l0 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandZoom;
