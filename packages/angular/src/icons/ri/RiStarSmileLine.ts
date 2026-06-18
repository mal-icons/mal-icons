import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-star-smile-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiStarSmileLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0.5L16.23 6.68L23.41 8.79L18.84 14.72L19.05 22.21L12 19.69L4.95 22.21L5.16 14.72L0.59 8.79L7.77 6.68L12 0.5ZM12 4.04L9.02 8.4L3.96 9.89L7.18 14.07L7.03 19.34L12 17.57L16.97 19.34L16.82 14.07L20.04 9.89L14.98 8.4L12 4.04ZM10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12H16C16 14.21 14.21 16 12 16C9.79 16 8 14.21 8 12H10Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiStarSmileLine;
