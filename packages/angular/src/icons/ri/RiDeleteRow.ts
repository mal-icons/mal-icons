import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-delete-row",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDeleteRow {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 5C20.55 5 21 5.45 21 6V12C21 12.55 20.55 13 20 13C20.63 13.84 21 14.87 21 16C21 18.76 18.76 21 16 21C13.24 21 11 18.76 11 16C11 14.87 11.37 13.84 12 13L4 13C3.45 13 3 12.55 3 12V6C3 5.45 3.45 5 4 5H20ZM13 15V17H19V15H13ZM19 7H5V11H19V7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDeleteRow;
