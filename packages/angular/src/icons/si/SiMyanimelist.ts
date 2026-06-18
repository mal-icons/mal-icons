import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-myanimelist",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMyanimelist {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.92 6.48c-0.82 0-3.68 0-4.95 3.16-0.66 1.65-0.99 4.810.88 7.89l1.93-1.41s-0.77-1.09-1.08-3.19h2.9l0.02 3.19h2.6V8.84h-2.58v2.04l-2.46-0.02s0.41-2.41 2.88-2.34h2.45l-0.57-2.04ZM0 6.53v9.62h2.35v-5.84l2.03 2.66 2.05-2.65v5.83h2.34V6.53H6.44L4.37 9.47 2.31 6.53Zm18.450.02v9.58h5.02L24 14.09h-3.23V6.55Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMyanimelist;
