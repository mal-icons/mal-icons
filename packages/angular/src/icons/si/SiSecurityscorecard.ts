import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-securityscorecard",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSecurityscorecard {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.37 2.5 12 5 7.63 7.5v-5L12 0Zm6.12 3.50 4.99-8.73-4.99 4.36-2.49Zm-4.37 9.510 5 4.38-2.50-5.02-4.37-2.5zM7.63 21.5 12 24l4.37-2.5v-5zM7.63 9.5v5l4.37 2.5 4.37-2.49V9.5l-4.37-2.5Zm-6.12 8.50-5.01 8.75 5-4.38 2.5Zm4.38-14.5L1.51 6l0 5 4.37 2.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSecurityscorecard;
