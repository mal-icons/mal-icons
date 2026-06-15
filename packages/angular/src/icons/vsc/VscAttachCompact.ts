import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-attach-compact",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscAttachCompact {
  readonly viewBox = "0 0 12 12";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.16 12H2.92C1.86 12 1.01 11.14 1.01 10.09C1.01 9.58 1.21 9.1 1.57 8.74L7.15 3.15C7.35 2.95 7.66 2.95 7.86 3.15C8.06 3.35 8.06 3.66 7.86 3.86L2.27 9.45C2.1 9.62 2 9.86 2 10.1C2 10.6 2.41 11.01 2.91 11.01H3.15C3.39 11.01 3.63 10.91 3.8 10.74L9.26 5.28C9.73 4.81 9.99 4.18 9.99 3.51C9.99 2.13 8.87 1.01 7.49 1.01C6.82 1.01 6.19 1.27 5.72 1.74L1.35 6.11C1.15 6.31 0.84 6.31 0.64 6.11C0.44 5.91 0.44 5.6 0.64 5.4L5.03 1.03C5.69 0.37 6.57 0 7.5 0C9.43 0 11 1.57 11 3.5C11 4.44 10.64 5.31 9.97 5.97L4.51 11.43C4.15 11.79 3.67 11.99 3.16 11.99V12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscAttachCompact;
