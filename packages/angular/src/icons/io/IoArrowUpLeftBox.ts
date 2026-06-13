import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-arrow-up-left-box",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoArrowUpLeftBox {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M32 180.36L32 48C32 43.76 33.69 39.69 36.69 36.69C39.69 33.69 43.76 32 48 32H180.36C189.2 32 196.36 39.16 196.36 48C196.36 56.84 189.2 64 180.36 64H86.63L137.76 115.13C133.04 117.75 128.67 121.03 124.78 124.91C120.95 128.75 117.7 133.07 115.09 137.72L64 86.63L64 180.36C64 189.2 56.84 196.36 48 196.36C39.16 196.36 32 189.2 32 180.36ZM115.09 137.72C110.25 146.38 107.64 156.21 107.64 166.31L107.64 421.46C107.64 436.98 113.81 451.87 124.78 462.85C135.76 473.83 150.66 480 166.18 480H421.46C436.98 480 451.87 473.83 462.85 462.85C473.83 451.87 480 436.98 480 421.46V166.18C480 150.66 473.83 135.76 462.85 124.78C451.87 113.81 436.98 107.64 421.46 107.64H166.18C165.37 107.64 164.58 107.7 163.8 107.81C154.61 108.19 145.69 110.72 137.76 115.13L307.31 284.69C313.56 290.94 313.56 301.07 307.31 307.31C301.07 313.56 290.94 313.56 284.69 307.31L115.09 137.72Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoArrowUpLeftBox;
