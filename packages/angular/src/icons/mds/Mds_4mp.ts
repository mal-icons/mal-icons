import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-4mp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mds_4mp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 14h1.5v1.5H15z"}],["path",{"d":"M3 3v18h18V3H3zm9.5 15.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5v6zm-3-8.5V5.5H11v3h1.5v-3H14v3h1V10h-1v1.5h-1.5V10h-3zm8.5 7h-3v1.5h-1.5v-6H18V17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mds_4mp;
