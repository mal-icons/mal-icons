import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-rss-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiRssOutline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 5c-1.66 0-3.01 1.34-3.01 3l0.01 9c0 2.21 1.79 4 4 4l90c1.66 0 3-1.35 3-30-7.18-5.82-13-13-13zm1 14c-1.10-2-0.89-2-20-1.10.89-2 2-2 1.110 20.89 2 20 1.11-0.89 2-2 2zm4.5 0c-0.83 0-1.5-0.67-1.5-1.5 0-1.93-1.57-3.5-3.5-3.5-0.83 0-1.5-0.67-1.5-1.5s0.67-1.5 1.5-1.5c3.58 0 6.5 2.92 6.5 6.5 0 0.83-0.67 1.5-1.5 1.5zm4 0c-0.83 0-1.5-0.67-1.5-1.5 0-4.14-3.36-7.5-7.5-7.5-0.83 0-1.5-0.67-1.5-1.5s0.67-1.5 1.5-1.5c5.79 0 10.5 4.71 10.5 10.5 0 0.83-0.67 1.5-1.5 1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiRssOutline;
