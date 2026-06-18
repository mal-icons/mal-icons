import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-torchain",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandTorchain {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.59 15.54l-3.55 -3.54l-7.74 8.18c-0.79 0.85 0.15 2.18 1.24 1.73l9.62 -4.1a1.4 1.4 0 0 0 0.44 -2.28"}],["path",{"d":"M8.41 8.46l3.55 3.54l7.74 -8.18c0.79 -0.85 -0.15 -2.18 -1.24 -1.73l-9.62 4.1a1.4 1.4 0 0 0 -0.44 2.28l0 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandTorchain;
