import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-sticky-note-add-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiStickyNoteAddFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 1V4H1V6H4V9H6V6H9V4H6V1H4ZM11 5C11 8.31 8.31 11 5 11C4.3 11 3.63 10.88 3 10.66V20.01C3 20.56 3.45 21 4 21H14V15C14 14.45 14.45 14 15 14H21V4C21 3.45 20.56 3 20.01 3H10.66C10.88 3.63 11 4.3 11 5ZM21 16L16 21V16H21Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiStickyNoteAddFill;
