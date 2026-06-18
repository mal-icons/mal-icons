import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-align-item-bottom-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiAlignItemBottomLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 5L9 15H6L6 5L9 5ZM5 3C4.45 3 4 3.45 4 4L4 16C4 16.55 4.45 17 5 17H10C10.55 17 11 16.55 11 16L11 4C11 3.45 10.55 3 10 3H5ZM15 9V15H18V9H15ZM13 8C13 7.45 13.45 7 14 7L19 7C19.55 7 20 7.45 20 8V16C20 16.55 19.55 17 19 17H14C13.45 17 13 16.55 13 16V8ZM21 19L3 19V21H21V19Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiAlignItemBottomLine;
