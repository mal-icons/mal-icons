import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-new-file",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscNewFile {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 14C4.45 14 4 13.55 4 13V3C4 2.45 4.45 2 5 2H8V4.5C8 5.33 8.67 6 9.5 6H12V6.03C12.34 6.06 12.68 6.12 13 6.21V5.41C13 5.02 12.84 4.64 12.56 4.35L9.65 1.44C9.37 1.16 8.98 1 8.59 1H5C3.9 1 3 1.9 3 3V13C3 14.11 3.9 15 5 15H7.26C7.01 14.69 6.79 14.36 6.61 14H5ZM9 2.21L11.79 5H9.5C9.22 5 9 4.78 9 4.5V2.21ZM11.5 7C9.02 7 7 9.02 7 11.5C7 13.99 9.02 16 11.5 16C13.99 16 16 13.99 16 11.5C16 9.02 13.99 7 11.5 7ZM14 12H12V14C12 14.28 11.78 14.5 11.5 14.5C11.22 14.5 11 14.28 11 14V12H9C8.72 12 8.5 11.78 8.5 11.5C8.5 11.22 8.72 11 9 11H11V9C11 8.72 11.22 8.5 11.5 8.5C11.78 8.5 12 8.72 12 9V11H14C14.28 11 14.5 11.22 14.5 11.5C14.5 11.78 14.28 12 14 12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscNewFile;
