import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-zwift",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandZwift {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.5 4c-1.46 0 -2.5 1.1 -2.5 2.5s1.03 2.5 2.5 2.5h2.5l-4.64 7.19a2.43 2.43 0 0 0 -0.01 2.54c0.47 0.79 1.35 1.27 2.3 1.27h10.85c1.47 0 2.5 -1.1 2.5 -2.5s-1.03 -2.5 -2.5 -2.5h-2.5l7 -11h-15.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandZwift;
