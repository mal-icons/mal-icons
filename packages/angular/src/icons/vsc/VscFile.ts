import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-file",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscFile {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 1C3.9 1 3 1.9 3 3V13C3 14.1 3.9 15 5 15H11C12.1 15 13 14.1 13 13V5.41C13 5.02 12.84 4.63 12.56 4.35L9.65 1.44C9.37 1.16 8.98 1 8.59 1H5ZM4 3C4 2.45 4.45 2 5 2H8V4.5C8 5.33 8.67 6 9.5 6H12V13C12 13.55 11.55 14 11 14H5C4.45 14 4 13.55 4 13V3ZM11.79 5H9.5C9.22 5 9 4.78 9 4.5V2.21L11.79 5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscFile;
