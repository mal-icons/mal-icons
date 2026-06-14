import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-gift-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcGift24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.75 3.75A3.75 3.75 0 0 1 7.5 0c1.46 0 3.440.9 4.5 3.11C13.060.9 15.04 0 16.5 0a3.75 3.75 0 0 1 3 6h1.75c0.97 0 1.750.78 1.75 1.75v2.5c0 0.7-0.41 1.3-1 1.58v8.42A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25v-8.42c-0.59-0.28-1-0.88-1-1.58v-2.5C1 6.78 1.78 6 2.75 6H4.5a3.73 3.73 0 0 1-0.75-2.25ZM20.5 12h-7.75v8.5h7.5a0.250.25 0 0 0 0.25-0.25Zm-9.25 8.5V12H3.5v8.25c0 0.140.110.250.250.25Zm10-10a0.250.25 0 0 0 0.25-0.25v-2.5a0.250.25 0 0 0-0.25-0.25h-8.5v3Zm-18.5 0h8.5v-3h-8.5a0.250.25 0 0 0-0.250.25v2.5c0 0.140.110.250.250.25Zm16-6.75A2.25 2.25 0 0 0 16.5 1.5c-1.15 0-3.43 1.01-3.72 4.5h3.72a2.25 2.25 0 0 0 2.25-2.25ZM11.22 6c-0.29-3.49-2.57-4.5-3.72-4.5a2.25 2.25 0 1 0 0 4.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcGift24;
