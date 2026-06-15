import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-copilot-warning",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscCopilotWarning {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.5 7C9.02 7 7 9.02 7 11.5C7 13.99 9.02 16 11.5 16C13.99 16 16 13.99 16 11.5C16 9.02 13.99 7 11.5 7ZM11 9C11 8.72 11.22 8.5 11.5 8.5C11.78 8.5 12 8.72 12 9V11.5C12 11.78 11.78 12 11.5 12C11.22 12 11 11.78 11 11.5V9ZM11.5 14.25C11.09 14.25 10.75 13.91 10.75 13.5C10.75 13.09 11.09 12.75 11.5 12.75C11.91 12.75 12.25 13.09 12.25 13.5C12.25 13.91 11.91 14.25 11.5 14.25ZM3 12.12V7.86L3.02 7.75C3.51 7.96 4.09 8.04 4.75 8.04C5.89 8.04 6.81 7.71 7.46 7.05C7.67 6.83 7.86 6.58 8 6.3C8.04 6.38 8.11 6.45 8.15 6.52C8.57 6.24 9.02 6.02 9.5 5.85C9.25 5.53 9.07 5.07 8.99 4.44C8.88 3.51 9.03 3.05 9.24 2.83C9.43 2.62 9.87 2.42 10.92 2.53C11.94 2.65 12.4 2.94 12.63 3.23C12.88 3.55 13 4.02 13 4.79C13 5.17 12.97 5.46 12.92 5.68C13.41 5.8 13.87 5.97 14.31 6.2C14.44 5.75 14.5 5.27 14.5 4.79C14.5 3.92 14.37 3.02 13.81 2.3C13.23 1.57 12.31 1.18 11.08 1.04C9.88 0.91 8.82 1.08 8.14 1.81C8.09 1.86 8.04 1.92 8 1.97C7.95 1.92 7.91 1.86 7.86 1.81C7.18 1.08 6.12 0.91 4.91 1.04C3.68 1.18 2.77 1.57 2.19 2.3C1.62 3.02 1.5 3.92 1.5 4.79C1.5 5.36 1.55 5.94 1.75 6.44C1.68 6.67 1.65 6.87 1.62 7.06C1.61 7.13 1.6 7.2 1.59 7.27C0.68 7.65 0.09 8.71 0 9.34V11.29C0.11 12.03 2.77 14.43 6.59 14.94C6.23 14.42 5.95 13.86 5.76 13.24C4.38 12.89 3.27 12.33 3 12.12ZM3.37 3.23C3.6 2.94 4.06 2.65 5.08 2.53C6.13 2.42 6.57 2.62 6.76 2.83C6.97 3.05 7.12 3.51 7 4.44C6.91 5.17 6.7 5.68 6.39 6C6.09 6.3 5.6 6.54 4.75 6.54C3.83 6.54 3.47 6.34 3.31 6.16C3.13 5.96 3 5.58 3 4.79C3 4.02 3.12 3.55 3.37 3.23Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscCopilotWarning;
