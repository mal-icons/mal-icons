import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-reactions",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscReactions {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 7C13 3.69 10.31 1 7 1C3.69 1 1 3.69 1 7C1 10.31 3.69 13 7 13C7.09 13 7.17 13 7.25 12.99C7.14 12.68 7.07 12.34 7.03 12L7 12C4.24 12 2 9.76 2 7C2 4.24 4.24 2 7 2C9.76 2 12 4.24 12 7L12 7.03C12.34 7.07 12.68 7.14 12.99 7.25C13 7.17 13 7.09 13 7ZM7.11 10.5C7.2 10.13 7.32 9.78 7.49 9.45C7.33 9.48 7.17 9.5 7 9.5C6.26 9.5 5.59 9.18 5.14 8.67C4.95 8.46 4.64 8.44 4.43 8.63C4.22 8.81 4.21 9.13 4.39 9.33C5.03 10.05 5.96 10.5 7 10.5C7.04 10.5 7.07 10.5 7.11 10.5ZM6 6C6 6.41 5.66 6.75 5.25 6.75C4.84 6.75 4.5 6.41 4.5 6C4.5 5.59 4.84 5.25 5.25 5.25C5.66 5.25 6 5.59 6 6ZM8.75 6.75C9.16 6.75 9.5 6.41 9.5 6C9.5 5.59 9.16 5.25 8.75 5.25C8.34 5.25 8 5.59 8 6C8 6.41 8.34 6.75 8.75 6.75ZM15 11.5C15 13.43 13.43 15 11.5 15C9.57 15 8 13.43 8 11.5C8 9.57 9.57 8 11.5 8C13.43 8 15 9.57 15 11.5ZM12 9.5C12 9.22 11.78 9 11.5 9C11.22 9 11 9.22 11 9.5V11H9.5C9.22 11 9 11.22 9 11.5C9 11.78 9.22 12 9.5 12H11V13.5C11 13.78 11.22 14 11.5 14C11.78 14 12 13.78 12 13.5V12H13.5C13.78 12 14 11.78 14 11.5C14 11.22 13.78 11 13.5 11H12V9.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscReactions;
