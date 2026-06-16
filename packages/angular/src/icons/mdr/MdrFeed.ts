import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-feed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFeed {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 3H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V8l-5-5zM8 7h3c0.55 0 1 0.45 1 1s-0.45 1-1 1H8c-0.55 0-1-0.45-1-1s0.45-1 1-1zm8 10H8c-0.55 0-1-0.45-1-1s0.45-1 1-1h8c0.55 0 1 0.45 1 1s-0.45 1-1 1zm0-4H8c-0.55 0-1-0.45-1-1s0.45-1 1-1h8c0.55 0 1 0.45 1 1s-0.45 1-1 1zm-1-5V5l4 4h-3c-0.55 0-1-0.45-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFeed;
