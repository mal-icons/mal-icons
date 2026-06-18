import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-toyota",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandToyota {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 12a10 7 0 1 0 20 0a10 7 0 1 0 -20 0"}],["path",{"d":"M9 12c0 3.87 1.34 7 3 7s3 -3.13 3 -7s-1.34 -7 -3 -7s-3 3.13 -3 7"}],["path",{"d":"M6.42 6.19c-0.89 0.5 -1.41 1.13 -1.41 1.81c0 1.66 3.13 3 7 3s7 -1.34 7 -3c0 -0.68 -0.52 -1.3 -1.41 -1.81"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandToyota;
