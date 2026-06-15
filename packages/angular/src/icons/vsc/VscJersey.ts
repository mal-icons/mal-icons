import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-jersey",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscJersey {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.5 14H4.5C4.22 14 4 13.78 4 13.5V7H2.25C2.02 7 1.83 6.85 1.77 6.63L1.02 3.88C0.95 3.63 1.09 3.36 1.33 3.28L5.48 1.83C5.6 1.78 5.74 1.79 5.86 1.85C5.98 1.91 6.07 2.01 6.12 2.14C6.39 2.95 7.15 3.5 8 3.5C8.85 3.5 9.61 2.95 9.88 2.14C9.93 2.01 10.02 1.91 10.14 1.85C10.26 1.79 10.4 1.78 10.52 1.83L14.67 3.28C14.92 3.36 15.05 3.63 14.98 3.88L14.23 6.63C14.17 6.85 13.98 7 13.75 7H12V13.5C12 13.78 11.78 14 11.5 14H11.5ZM5 13H11V6.5C11 6.22 11.22 6 11.5 6H13.37L13.9 4.07L10.63 2.93C10.11 3.88 9.11 4.5 8 4.5C6.89 4.5 5.89 3.88 5.37 2.93L2.1 4.07L2.63 6H4.5C4.78 6 5 6.22 5 6.5V13Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscJersey;
