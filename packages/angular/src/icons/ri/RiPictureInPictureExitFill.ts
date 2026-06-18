import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-picture-in-picture-exit-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPictureInPictureExitFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 3C21.55 3 22 3.45 22 4V11H20V5H4V19H10V21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3H21ZM21 13C21.55 13 22 13.45 22 14V20C22 20.55 21.55 21 21 21H13C12.45 21 12 20.55 12 20V14C12 13.45 12.45 13 13 13H21ZM11.5 7L9.46 9.04L11.71 11.29L10.29 12.71L8.04 10.46L6 12.5V7H11.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPictureInPictureExitFill;
