import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-file-excel-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFileExcelLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.2 12L16 16H13.6L12 13.71L10.4 16H8L10.8 12L8 8H10.4L12 10.29L13.6 8H15V4H5V20H19V8H16L13.2 12ZM3 2.99C3 2.44 3.45 2 4 2H16L21 7L21 20.99C21 21.55 20.56 22 20.01 22H3.99C3.44 22 3 21.54 3 21.01V2.99Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFileExcelLine;
