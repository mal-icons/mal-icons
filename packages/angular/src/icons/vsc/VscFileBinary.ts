import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-file-binary",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscFileBinary {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 1C3.9 1 3 1.9 3 3V13C3 14.11 3.9 15 5 15H11C12.11 15 13 14.11 13 13V5.41C13 5.02 12.84 4.64 12.56 4.35L9.65 1.44C9.37 1.16 8.98 1 8.59 1H5ZM4 3C4 2.45 4.45 2 5 2H8V4.5C8 5.33 8.67 6 9.5 6H12V13C12 13.55 11.55 14 11 14H5C4.45 14 4 13.55 4 13V3ZM11.79 5H9.5C9.22 5 9 4.78 9 4.5V2.21L11.79 5Z"}],["path",{"d":"M10.8 8.2C10.9 8.3 11 8.45 11 8.65V12.5C11 12.78 10.78 13 10.5 13C10.22 13 10 12.78 10 12.5V9.46C9.78 9.64 9.52 9.81 9.21 9.96C8.96 10.07 8.66 9.96 8.55 9.71C8.43 9.46 8.54 9.16 8.79 9.05C9.26 8.83 9.57 8.52 9.77 8.26C9.99 7.97 10.34 8 10.5 8.04C10.59 8.06 10.71 8.11 10.8 8.2ZM6.5 8C5.67 8 5 8.67 5 9.5V11.5C5 12.33 5.67 13 6.5 13C7.33 13 8 12.33 8 11.5V9.5C8 8.67 7.33 8 6.5 8ZM6 9.5C6 9.22 6.22 9 6.5 9C6.78 9 7 9.22 7 9.5V11.5C7 11.78 6.78 12 6.5 12C6.22 12 6 11.78 6 11.5V9.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscFileBinary;
