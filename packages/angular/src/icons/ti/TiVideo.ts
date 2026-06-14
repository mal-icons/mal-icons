import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-video",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiVideo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.53 7.15c-0.16-0.1-0.34-0.15-0.52-0.15-0.15 0-0.310.04-0.450.11l-2.55 1.28v-0.38c0-1.65-1.35-3-3-3h-11c-1.65 0-3 1.35-3 3v8c0 1.65 1.35 3 3 3h11c1.65 0 3-1.35 3-3v-0.38l2.55 1.28c0.140.070.290.110.450.110.18 0 0.37-0.050.53-0.150.3-0.180.48-0.50.48-0.85v-8c0-0.35-0.18-0.67-0.47-0.85zm-15.52 6.35c-0.83 0-1.5-0.67-1.5-1.5s0.67-1.5 1.5-1.5 1.50.67 1.5 1.5-0.67 1.5-1.5 1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiVideo;
