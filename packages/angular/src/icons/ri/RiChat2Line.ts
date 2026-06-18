import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-chat-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiChat2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.45 19L12 22.5L9.55 19H3C2.73 19 2.48 18.89 2.29 18.71C2.11 18.52 2 18.27 2 18V4C2 3.73 2.11 3.48 2.29 3.29C2.48 3.11 2.73 3 3 3H21C21.27 3 21.52 3.11 21.71 3.29C21.89 3.48 22 3.73 22 4V18C22 18.27 21.89 18.52 21.71 18.71C21.52 18.89 21.27 19 21 19H14.45ZM13.41 17H20V5H4V17H10.59L12 19.01L13.41 17Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiChat2Line;
