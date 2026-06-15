import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-debug-line-by-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscDebugLineByLine {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.62 8.91C4.5 9.09 5.4 9 6.22 8.66C7.04 8.32 7.75 7.74 8.24 7C8.74 6.26 9 5.39 9 4.5C9 3.31 8.53 2.16 7.68 1.32C6.84 0.48 5.69 0 4.5 0C3.61 0 2.74 0.27 2 0.76C1.26 1.25 0.68 1.96 0.34 2.78C0 3.6 -0.09 4.51 0.09 5.38C0.26 6.25 0.69 7.05 1.32 7.68C1.95 8.31 2.75 8.74 3.62 8.91ZM3 2.85C3 2.76 3.02 2.68 3.07 2.6C3.11 2.53 3.17 2.46 3.25 2.42C3.32 2.38 3.41 2.35 3.49 2.35C3.58 2.35 3.67 2.37 3.74 2.41L6.71 4.06C6.79 4.11 6.86 4.17 6.9 4.25C6.95 4.32 6.97 4.41 6.97 4.5C6.97 4.59 6.95 4.68 6.9 4.75C6.86 4.83 6.79 4.89 6.71 4.94L3.74 6.59C3.67 6.63 3.58 6.65 3.49 6.65C3.41 6.65 3.32 6.62 3.25 6.58C3.17 6.54 3.11 6.47 3.07 6.4C3.02 6.32 3 6.24 3 6.15V2.85ZM15 7.5C15 7.78 14.78 8 14.5 8H8.74C9 7.69 9.22 7.36 9.4 7H14.5C14.78 7 15 7.22 15 7.5ZM9.98 4C9.95 3.66 9.89 3.32 9.79 3H14.5C14.78 3 15 3.22 15 3.5C15 3.78 14.78 4 14.5 4H9.98ZM15 11.5C15 11.78 14.78 12 14.5 12H1.5C1.22 12 1 11.78 1 11.5C1 11.22 1.22 11 1.5 11H14.5C14.78 11 15 11.22 15 11.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscDebugLineByLine;
