import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-rss-feed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrRssFeed {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"6.18","cy":"17.82","r":"2.18"}],["path",{"d":"M5.59 10.23c-0.84-0.14-1.590.55-1.59 1.4 0 0.710.53 1.28 1.23 1.4 2.920.51 5.22 2.82 5.74 5.740.120.70.69 1.23 1.4 1.230.85 0 1.54-0.75 1.41-1.59a9.89 9.89 0 0 0-8.19-8.18zm-0.03-5.71C4.73 4.43 4 5.1 4 5.93c0 0.730.55 1.33 1.27 1.4 6.010.6 10.79 5.38 11.39 11.390.070.730.67 1.28 1.4 1.280.84 0 1.5-0.73 1.42-1.56-0.73-7.34-6.57-13.19-13.92-13.92z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrRssFeed;
