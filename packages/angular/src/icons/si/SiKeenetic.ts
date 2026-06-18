import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-keenetic",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiKeenetic {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.72 10.19 24 2.38h-6.59L9.79 9.81H4.33V2.38H0v19.25h4.33V14.14h7.62c3.2 0 5.410.71 6.59 2.070.710.8 1.03 1.88 1.03 3.25v2.17h4.33v-2.16c0-2.35-0.71-4.42-2.07-6.02-1.46-1.65-3.48-2.78-6.12-3.25"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiKeenetic;
