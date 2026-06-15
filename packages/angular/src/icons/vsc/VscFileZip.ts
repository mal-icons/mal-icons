import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-file-zip",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscFileZip {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 6V4.5C2 3.67 2.67 3 3.5 3H5.59C5.72 3 5.85 3.05 5.94 3.15L7.29 4.5L5.94 5.85C5.85 5.95 5.72 6 5.59 6H2ZM3.5 2C2.12 2 1 3.12 1 4.5V11.5C1 12.88 2.12 14 3.5 14H12.5C13.88 14 15 12.88 15 11.5V6.5C15 5.12 13.88 4 12.5 4H8.21L6.65 2.44C6.37 2.16 5.98 2 5.59 2H3.5ZM9 5V7.5C9 7.78 9.22 8 9.5 8H10V9H9.5C9.22 9 9 9.22 9 9.5C9 9.78 9.22 10 9.5 10H10V11H9.5C9.22 11 9 11.22 9 11.5C9 11.78 9.22 12 9.5 12H10V13H3.5C2.67 13 2 12.33 2 11.5V7H5.59C5.98 7 6.37 6.84 6.65 6.56L8.21 5H9ZM11 13V11H11.5C11.78 11 12 10.78 12 10.5C12 10.22 11.78 10 11.5 10H11V8H11.5C11.78 8 12 7.78 12 7.5V5H12.5C13.33 5 14 5.67 14 6.5V11.5C14 12.33 13.33 13 12.5 13H11ZM11 5V7H10V5H11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscFileZip;
