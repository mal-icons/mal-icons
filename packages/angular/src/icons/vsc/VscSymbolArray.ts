import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-symbol-array",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscSymbolArray {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 14H4.5C3.67 14 3 13.33 3 12.5V3.5C3 2.67 3.67 2 4.5 2H5C5.28 2 5.5 2.22 5.5 2.5C5.5 2.78 5.28 3 5 3H4.5C4.22 3 4 3.22 4 3.5V12.5C4 12.78 4.22 13 4.5 13H5C5.28 13 5.5 13.22 5.5 13.5C5.5 13.78 5.28 14 5 14ZM13 12.5V3.5C13 2.67 12.33 2 11.5 2H11C10.72 2 10.5 2.22 10.5 2.5C10.5 2.78 10.72 3 11 3H11.5C11.78 3 12 3.22 12 3.5V12.5C12 12.78 11.78 13 11.5 13H11C10.72 13 10.5 13.22 10.5 13.5C10.5 13.78 10.72 14 11 14H11.5C12.33 14 13 13.33 13 12.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscSymbolArray;
