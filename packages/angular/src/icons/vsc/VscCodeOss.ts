import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-code-oss",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscCodeOss {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.5 1H3.5C2.12 1 1 2.12 1 3.5V12.5C1 13.88 2.12 15 3.5 15H12.5C13.88 15 15 13.88 15 12.5V3.5C15 2.12 13.88 1 12.5 1ZM2 12.5V3.5C2 2.67 2.67 2 3.5 2H5V14H3.5C2.67 14 2 13.33 2 12.5ZM14 12.5C14 13.33 13.33 14 12.5 14H6V2H12.5C13.33 2 14 2.67 14 3.5V12.5Z"}],["path",{"d":"M7.5 4H10.5C10.78 4 11 3.78 11 3.5C11 3.22 10.78 3 10.5 3H7.5C7.22 3 7 3.22 7 3.5C7 3.78 7.22 4 7.5 4Z"}],["path",{"d":"M12.5 5H9.5C9.22 5 9 5.22 9 5.5C9 5.78 9.22 6 9.5 6H12.5C12.78 6 13 5.78 13 5.5C13 5.22 12.78 5 12.5 5Z"}],["path",{"d":"M10.5 11H7.5C7.22 11 7 11.22 7 11.5C7 11.78 7.22 12 7.5 12H10.5C10.78 12 11 11.78 11 11.5C11 11.22 10.78 11 10.5 11Z"}],["path",{"d":"M12.5 7H9.5C9.22 7 9 7.22 9 7.5C9 7.78 9.22 8 9.5 8H12.5C12.78 8 13 7.78 13 7.5C13 7.22 12.78 7 12.5 7Z"}],["path",{"d":"M12.5 9H9.5C9.22 9 9 9.22 9 9.5C9 9.78 9.22 10 9.5 10H12.5C12.78 10 13 9.78 13 9.5C13 9.22 12.78 9 12.5 9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscCodeOss;
