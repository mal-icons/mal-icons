import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-mcp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscMcp {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M14.56 7.87C14.54 7.89 14.52 7.91 14.5 7.93L8.7 13.62C8.63 13.69 8.62 13.81 8.69 13.88C8.7 13.88 8.7 13.88 8.7 13.88L9.89 15.05C10.11 15.26 10.11 15.61 9.9 15.83C9.9 15.83 9.89 15.84 9.89 15.84C9.67 16.06 9.31 16.06 9.09 15.84L7.9 14.67C7.39 14.18 7.38 13.37 7.87 12.86C7.88 12.85 7.89 12.84 7.9 12.83L13.7 7.14C14.35 6.51 14.37 5.47 13.73 4.81C13.72 4.8 13.71 4.79 13.7 4.78L13.67 4.75C13 4.1 11.93 4.1 11.26 4.75L6.48 9.44L6.48 9.44L6.41 9.5C6.19 9.72 5.83 9.72 5.61 9.5C5.39 9.29 5.39 8.94 5.6 8.73C5.6 8.72 5.61 8.72 5.61 8.72L10.46 3.96C11.11 3.33 11.12 2.28 10.49 1.63C10.48 1.62 10.47 1.61 10.46 1.6C9.79 0.95 8.72 0.95 8.05 1.6L1.63 7.9C1.41 8.11 1.06 8.11 0.83 7.9C0.62 7.68 0.61 7.34 0.82 7.12C0.83 7.12 0.83 7.11 0.83 7.11L7.25 0.82C8.37 -0.27 10.14 -0.27 11.26 0.82C11.89 1.43 12.19 2.31 12.06 3.18C12.94 3.05 13.83 3.34 14.47 3.96L14.5 4C15.59 5.05 15.61 6.79 14.56 7.87V7.87ZM12.87 6.32C13.08 6.11 13.09 5.76 12.88 5.55C12.87 5.54 12.87 5.54 12.87 5.54C12.64 5.32 12.29 5.32 12.06 5.54L7.32 10.19C6.65 10.84 5.58 10.84 4.91 10.19C4.26 9.56 4.24 8.51 4.88 7.86C4.89 7.85 4.9 7.84 4.91 7.83L9.66 3.18C9.87 2.96 9.88 2.62 9.67 2.4C9.66 2.4 9.66 2.39 9.66 2.39C9.43 2.17 9.08 2.17 8.85 2.39L4.11 7.04C3.02 8.1 3 9.84 4.05 10.92C4.07 10.94 4.09 10.96 4.11 10.98C5.22 12.06 7 12.06 8.12 10.98L12.87 6.32V6.32Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscMcp;
