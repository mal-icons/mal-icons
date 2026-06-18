import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-pysyft",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPysyft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m16.52 17.99 1.41-0.46V13.64Zm6.49-5.63L24 9.31l-6.79-4.93zm-4.35-4.51 2.41 7.42 1.49-2.05zm0.14 3.2 1.59 4.9-1.59 1.16zM9.73 20.19l3.69-1.2H8.86ZM12 22.03l4.16-3.02-5.75 1.87zm3.27 1.23 3.89-5.36-6.3 4.58zm4.150.16h-3.2l5.79-7.97Zm-9.66-1.95-6.3-4.58v2.53zm-5.17 1.95h8.38l-9.36-3.04Zm-0.36-9.35-0.61 1.87 4.16 3.02zm2.72 2.28-2.28-3.140.87-1.2ZM0 9.31l2.59 7.98V7.42Zm5.87-3.09-2.410.78v6.64Zm0.95-0.14-1.59 4.9 3.56-4.9Zm2.920.16 1.410.46-3.7 2.69zm4.86-3.76L120.59 5.21 5.52ZM8.95 5.21h7.81L15.27 3.16zm3.080.86 5.77 1.87-0.61-1.87zm5.91 2.82v1.49l-3.7-2.69Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPysyft;
