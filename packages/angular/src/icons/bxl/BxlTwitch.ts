import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-twitch",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlTwitch {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.26 3 3 6.24v13.22h4.5V21l2.530.85 2.39-2.39h3.66l4.92-4.92V3H4.26zm15.05 10.69-2.81 2.81h-4.5l-2.39 2.39v-2.39H5.81V4.69h13.5v9zm-2.81-5.77v4.92h-1.69V7.92h1.69zm-4.5 0v4.92h-1.69V7.92h1.69z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlTwitch;
