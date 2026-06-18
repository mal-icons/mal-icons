import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-loopback",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLoopback {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m6.33 18.41 2.51-1.61 3.18 1.81 3.21-1.88 2.66 1.52-5.85 3.42-5.71-3.26ZM5.27 6.24l6.69-3.91 6.73 3.840.02 6.76-2.65-1.51-0.01-3.7-4.07-2.32-4.05 2.370.01 3.7-0.90.53-1.74 1.12-0.02-6.86Zm3.61 2.46 1.91 1.09-1.91 1.11-0.01-2.2Zm4.34 5.51 2.63-1.54 3.27 1.86 2.22-1.3-0.01-2.57-1.68-0.96-0.01-3.05 4.36 2.490 5.61-4.86 2.84-5.92-3.38Zm-13.190.66L0 9.25l4.32-2.520.01 3.06-1.670.980.01 2.57 2.23 1.27L15.1 8.66l0.01 3.06-10.19 5.94-4.89-2.79Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLoopback;
