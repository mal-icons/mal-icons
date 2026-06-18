import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-insert-row-bottom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiInsertRowBottom {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 13C14.76 13 17 15.24 17 18C17 20.76 14.76 23 12 23C9.24 23 7 20.76 7 18C7 15.24 9.24 13 12 13ZM13 15H11V17L9 17V19L11 19V21H13V19L15 19V17L13 17V15ZM20 3C20.55 3 21 3.45 21 4V10C21 10.55 20.55 11 20 11H4C3.45 11 3 10.55 3 10V4C3 3.45 3.45 3 4 3H20ZM5 5V9H19V5H5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiInsertRowBottom;
