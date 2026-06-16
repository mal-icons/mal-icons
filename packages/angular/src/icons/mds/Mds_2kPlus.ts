import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-2k-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mds_2kPlus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 3H3v18h18V3zm-11 9.5H7.5v1H10V15H6v-3.5h2.5v-1H6V9h4v3.5zm4.25 2.5-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3L16 15h-1.75zM19 12.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19v1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mds_2kPlus;
