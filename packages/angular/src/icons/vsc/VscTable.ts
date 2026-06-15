import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-table",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscTable {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 3.5C1 2.12 2.12 1 3.5 1H12.5C13.88 1 15 2.12 15 3.5V12.5C15 13.88 13.88 15 12.5 15H3.5C2.12 15 1 13.88 1 12.5V3.5ZM6 14H10V11L6 11V14ZM5 11H2V12.5C2 13.33 2.67 14 3.5 14H5V11ZM6 10L10 10V6L6 6V10ZM5 6H2V10H5V6ZM6 5L10 5V2H6V5ZM5 2H3.5C2.67 2 2 2.67 2 3.5V5H5V2ZM14 6H11V10H14V6ZM14 11H11V14H12.5C13.33 14 14 13.33 14 12.5V11ZM14 5V3.5C14 2.67 13.33 2 12.5 2H11V5H14Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscTable;
