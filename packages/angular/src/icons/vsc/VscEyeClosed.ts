import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-eye-closed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscEyeClosed {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.12 10.83L14.15 14.85C14.34 15.05 14.66 15.05 14.85 14.85C15.05 14.66 15.05 14.34 14.85 14.15L1.85 1.15C1.66 0.95 1.34 0.95 1.15 1.15C0.95 1.34 0.95 1.66 1.15 1.85L4.38 5.08C3.9 5.42 3.51 5.8 3.2 6.18C2.75 6.72 2.46 7.26 2.28 7.67C2.19 7.87 2.12 8.04 2.08 8.17C2.06 8.23 2.03 8.31 2.03 8.31L2.02 8.37C2.02 8.37 1.94 8.87 2.37 8.98C2.64 9.05 2.91 8.89 2.98 8.63L2.98 8.62L2.99 8.6C3 8.58 3.01 8.54 3.03 8.49C3.06 8.39 3.11 8.25 3.19 8.08C3.35 7.74 3.6 7.28 3.97 6.82C4.26 6.46 4.63 6.1 5.1 5.8L6.67 7.38C5.97 7.82 5.5 8.61 5.5 9.5C5.5 10.88 6.62 12 8 12C8.89 12 9.68 11.53 10.12 10.83ZM9.38 10.09C9.15 10.62 8.62 11 8 11C7.17 11 6.5 10.33 6.5 9.5C6.5 8.88 6.88 8.35 7.41 8.12L9.38 10.09ZM6.32 4.2L7.17 5.05C7.43 5.02 7.71 5 8 5C10.04 5 11.29 5.91 12.03 6.82C12.4 7.28 12.65 7.74 12.81 8.08C12.89 8.25 12.94 8.39 12.97 8.49C12.99 8.54 13 8.58 13.01 8.6L13.02 8.62L13.02 8.63L13.02 8.63C13.09 8.9 13.36 9.05 13.63 8.98C13.9 8.91 14.05 8.64 13.98 8.37L13.98 8.37L13.98 8.37L13.98 8.37L13.98 8.35C13.98 8.34 13.97 8.33 13.97 8.31C13.96 8.28 13.94 8.23 13.92 8.17C13.88 8.04 13.81 7.87 13.72 7.67C13.54 7.26 13.25 6.72 12.8 6.18C11.9 5.09 10.4 4 8 4C7.38 4 6.82 4.07 6.32 4.2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscEyeClosed;
