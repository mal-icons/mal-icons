import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-thumb-up-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtThumbUpAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.34 4.66 9 9v10h9l3-7v-2h-8.77z","opacity":".3"}],["path",{"d":"M21 8h-6.31l0.95-4.570.03-0.32c0-0.41-0.17-0.79-0.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.10.9 2 2 2h9c0.83 0 1.54-0.5 1.84-1.22l3.02-7.05c0.09-0.230.14-0.470.14-0.73v-2c0-1.1-0.9-2-2-2zm0 4-3 7H9V9l4.34-4.34L12.23 10H21v2zM1 9h4v12H1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtThumbUpAlt;
