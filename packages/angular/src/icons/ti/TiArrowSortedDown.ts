import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-arrow-sorted-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiArrowSortedDown {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.8 9.7l6.2 6.3 6.2-6.3c0.2-0.20.3-0.50.3-0.7s-0.1-0.5-0.3-0.7c-0.2-0.2-0.4-0.3-0.7-0.3h-11c-0.3 0-0.50.1-0.70.3-0.20.2-0.30.4-0.30.7s0.10.50.30.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiArrowSortedDown;
