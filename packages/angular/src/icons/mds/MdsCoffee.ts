import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-coffee",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsCoffee {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.5 3H4v8c0 3.87 3.13 7 7 7s7-3.13 7-7v-1h0.4c1.67 0 3.19-1.13 3.52-2.77A3.49 3.49 0 0 0 18.5 3zM16 5v3H6V5h10zm2.5 3H18V5h0.5c0.83 0 1.50.67 1.5 1.5S19.33 8 18.5 8zM4 19h16v2H4v-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsCoffee;
