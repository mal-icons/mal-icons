import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-chat-1-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiChat1Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 3H14C18.42 3 22 6.58 22 11C22 15.42 18.42 19 14 19V22.5C9 20.5 2 17.5 2 11C2 6.58 5.58 3 10 3ZM12 17H14C17.31 17 20 14.31 20 11C20 7.69 17.31 5 14 5H10C6.69 5 4 7.69 4 11C4 14.61 6.46 16.97 12 19.48V17Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiChat1Line;
