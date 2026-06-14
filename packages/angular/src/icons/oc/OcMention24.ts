import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-mention-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcMention24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.23 7.25c-2.62-4.54-8.43-6.1-12.97-3.47-4.54 2.62-6.1 8.43-3.48 12.97 2.62 4.54 8.43 6.1 12.97 3.48a0.750.75 0 0 1 0.75 1.3c-5.26 3.04-11.99 1.24-15.02-4.03C-0.56 12.24 1.24 5.51 6.5 2.48 11.76-0.56 18.49 1.24 21.53 6.5a10.96 10.96 0 0 1 1.46 4.83c0.010.060.020.110.020.17v2.25a3.5 3.5 0 0 1-6.62 1.58 5.5 5.5 0 1 1 1.11-3.680.80.8 0 0 1 0.010.13v1.97a2 2 0 1 0 4 0v-1.77a9.46 9.46 0 0 0-1.27-4.73ZM16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcMention24;
