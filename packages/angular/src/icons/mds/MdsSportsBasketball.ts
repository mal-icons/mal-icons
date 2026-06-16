import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-sports-basketball",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsSportsBasketball {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.09 11h4.86a9.95 9.95 0 0 0-1.54-4.4 5.99 5.99 0 0 0-3.32 4.4zM6.91 11a5.99 5.99 0 0 0-3.32-4.4A9.95 9.95 0 0 0 2.05 11h4.86zm8.16 0a7.99 7.99 0 0 1 4.06-6A9.97 9.97 0 0 0 13 2.05V11h2.07zm-6.14 0H11V2.05A9.94 9.94 0 0 0 4.87 5a7.99 7.99 0 0 1 4.06 6zm6.14 2H13v8.95A9.94 9.94 0 0 0 19.13 19a7.99 7.99 0 0 1-4.06-6zM3.59 17.4A6.03 6.03 0 0 0 6.91 13H2.05c0.16 1.610.71 3.11 1.54 4.4zm13.5-4.4a5.99 5.99 0 0 0 3.32 4.4 9.95 9.95 0 0 0 1.54-4.4h-4.86zm-8.16 0a7.99 7.99 0 0 1-4.06 6A9.97 9.97 0 0 0 11 21.95V13H8.93z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsSportsBasketball;
