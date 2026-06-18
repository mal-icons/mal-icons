import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-focus-mode",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFocusMode {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 3C3.45 3 3 3.45 3 4V8H5V5H8V3H4ZM20 3H16V5H19V8H21V4C21 3.45 20.55 3 20 3ZM5 16V19H8V21H4C3.45 21 3 20.55 3 20V16H5ZM19 16V19H16V21H20C20.55 21 21 20.55 21 20V16H19ZM10 9C9.45 9 9 9.45 9 10V14C9 14.55 9.45 15 10 15H14C14.55 15 15 14.55 15 14V10C15 9.45 14.55 9 14 9H10Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFocusMode;
