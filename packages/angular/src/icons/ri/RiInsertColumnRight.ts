import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-insert-column-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiInsertColumnRight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 3C10.55 3 11 3.45 11 4V20C11 20.55 10.55 21 10 21H4C3.45 21 3 20.55 3 20V4C3 3.45 3.45 3 4 3H10ZM9 5H5V19H9V5ZM18 7C20.76 7 23 9.24 23 12C23 14.76 20.76 17 18 17C15.24 17 13 14.76 13 12C13 9.24 15.24 7 18 7ZM19 9H17V11L15 11V13L17 13V15H19V13L21 13V11L19 11V9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiInsertColumnRight;
