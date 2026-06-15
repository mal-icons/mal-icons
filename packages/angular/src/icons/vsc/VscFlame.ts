import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-flame",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscFlame {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.17 2.38C8.45 2.24 8.72 2.14 8.96 2.08C8.99 2.62 9.15 3.16 9.38 3.67C9.71 4.39 10.18 5.12 10.65 5.84C10.66 5.86 10.68 5.89 10.7 5.92C11.16 6.62 11.6 7.3 11.94 7.98C12.29 8.69 12.5 9.36 12.5 10C12.5 11.15 12.16 12.15 11.51 12.85C10.87 13.54 9.89 14 8.5 14C7.11 14 6.14 13.6 5.46 12.97C4.77 12.35 4.34 11.45 4.1 10.39C3.88 9.39 4.07 8.5 4.33 7.84C4.38 7.73 4.42 7.63 4.46 7.54L4.59 7.79C4.97 8.55 5.9 8.86 6.66 8.48C7.5 8.06 7.74 7.02 7.38 6.25C7.01 5.44 6.72 4.44 6.98 3.66C7.17 3.07 7.63 2.66 8.17 2.38ZM4.11 6.19L4.11 6.19L4.11 6.19L4.1 6.2L4.09 6.22C4.07 6.24 4.06 6.26 4.04 6.29C3.99 6.35 3.93 6.44 3.87 6.55C3.73 6.77 3.56 7.08 3.4 7.47C3.09 8.25 2.84 9.36 3.12 10.61C3.39 11.8 3.9 12.9 4.78 13.71C5.67 14.53 6.9 15 8.5 15C10.12 15 11.39 14.46 12.25 13.53C13.1 12.6 13.5 11.35 13.5 10C13.5 9.14 13.22 8.31 12.83 7.54C12.47 6.8 11.99 6.07 11.55 5.39C11.53 5.36 11.51 5.32 11.48 5.29C11.01 4.56 10.58 3.89 10.29 3.26C10.01 2.62 9.9 2.08 9.99 1.6C10.02 1.45 9.98 1.3 9.89 1.18C9.79 1.07 9.65 1 9.5 1C9.08 1 8.38 1.15 7.71 1.49C7.04 1.84 6.33 2.43 6.03 3.34C5.64 4.51 6.09 5.83 6.47 6.66C6.64 7.04 6.49 7.45 6.21 7.59C5.94 7.72 5.62 7.61 5.48 7.35L4.95 6.28C4.87 6.12 4.72 6.02 4.55 6C4.38 5.98 4.22 6.06 4.11 6.19Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscFlame;
