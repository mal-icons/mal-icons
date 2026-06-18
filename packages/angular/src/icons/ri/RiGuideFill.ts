import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-guide-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiGuideFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 8V16C13 17.66 11.66 19 10 19H7.83C7.42 20.17 6.31 21 5 21C3.34 21 2 19.66 2 18C2 16.34 3.34 15 5 15C6.31 15 7.42 15.83 7.83 17H10C10.55 17 11 16.55 11 16V8C11 6.34 12.34 5 14 5H17V2L22 6L17 10V7H14C13.45 7 13 7.45 13 8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiGuideFill;
