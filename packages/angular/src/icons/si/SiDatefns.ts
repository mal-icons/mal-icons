import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-datefns",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDatefns {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.07 6.53C0.36 8.25 0 10.07 0 12c0 1.930.36 3.75 1.07 5.47a13.77 13.77 0 0 0 3.07 4.55h2.69c-2.78-2.76-4.18-6.09-4.18-10.01 0-3.92 1.39-7.26 4.18-10.01H4.13a13.77 13.77 0 0 0-3.07 4.55Zm21.87 10.93c0.71-1.71 1.07-3.53 1.07-5.47 0-1.93-0.36-3.75-1.07-5.46a13.77 13.77 0 0 0-3.07-4.55h-2.68c2.78 2.76 4.18 6.09 4.18 10.01 0 3.92-1.39 7.26-4.18 10.02h2.69a13.77 13.77 0 0 0 3.07-4.55ZM11.63 3.3H9.85v10.21h1.78v-0.03l7.22-7.22-1.15-1.15-6.07 6.07V3.3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDatefns;
