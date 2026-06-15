import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-chrome-restore",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscChromeRestore {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.08 4C5.29 3.42 5.85 3 6.5 3H10C11.66 3 13 4.34 13 6V9.5C13 10.15 12.58 10.71 12 10.91V6C12 4.9 11.1 4 10 4H5.08ZM4.5 5H9.5C10.33 5 11 5.67 11 6.5V11.5C11 12.33 10.33 13 9.5 13H4.5C3.67 13 3 12.33 3 11.5V6.5C3 5.67 3.67 5 4.5 5ZM4.5 6C4.22 6 4 6.22 4 6.5V11.5C4 11.78 4.22 12 4.5 12H9.5C9.78 12 10 11.78 10 11.5V6.5C10 6.22 9.78 6 9.5 6H4.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscChromeRestore;
