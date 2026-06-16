import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-21mp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mds_21mp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 14h1.5v1.5H15z"}],["path",{"d":"M3 3v18h18V3H3zm4.5 5h3V7h-3V5.5H12V9H9v1h3v1.5H7.5V8zm5 10.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5v6zm0.5-13h3v6h-1.5V7H13V5.5zM18 17h-3v1.5h-1.5v-6H18V17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mds_21mp;
