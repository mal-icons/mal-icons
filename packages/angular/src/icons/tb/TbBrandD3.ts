import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-d3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandD3 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 4h1.8c3.98 0 7.2 3.58 7.2 8s-3.22 8 -7.2 8h-1.8"}],["path",{"d":"M12 4h5.47c1.95 0 3.53 1.79 3.53 4s-1.58 4 -3.53 4"}],["path",{"d":"M17.47 12h-2.47"}],["path",{"d":"M17.47 12h-2.35"}],["path",{"d":"M17.47 12c1.95 0 3.53 1.79 3.53 4s-1.58 4 -3.53 4h-5.47"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandD3;
