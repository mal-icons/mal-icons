import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-sticky-note-add-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiStickyNoteAddLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 1V4H1V6H4V9H6V6H9V4H6V1H4ZM3 20.01V11H5V19H13V14C13 13.45 13.45 13 14 13L19 13V5H11V3H20.01C20.56 3 21 3.46 21 4V15L15 21L4 21C3.45 21 3 20.56 3 20.01ZM18.17 15L15 15V18.17L18.17 15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiStickyNoteAddLine;
