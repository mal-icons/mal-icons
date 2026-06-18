import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-order-play-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiOrderPlayLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 4V2.07C17 1.79 17.22 1.57 17.5 1.57C17.62 1.57 17.73 1.61 17.82 1.68L21.94 5.12C22.15 5.29 22.18 5.61 22 5.82C21.91 5.93 21.77 6 21.62 6H2V4H17ZM2 18H22V20H2V18ZM2 11H22V13H2V11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiOrderPlayLine;
