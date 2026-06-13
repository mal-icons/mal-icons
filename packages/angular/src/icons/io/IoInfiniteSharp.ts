import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-infinite-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoInfiniteSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M382,136c-40.87,0-73.46,20.53-93.6,37.76l-0.710.61-11.47,12.47,25.32,41.61,18.74-18.79C339.89,193.1,361.78,184,382,184c40.8,0,74,32.3,74,72s-33.2,72-74,72c-62,0-104.14-81.95-104.56-82.78h0C275,240.29,221.56,136,130,136,62.73,136,8,189.83,8,256S62.73,376,130,376c32.95,0,65.38-13.11,93.79-37.92l0.61-0.54,11.38-12.38-25.33-41.61-18.83,18.88C172,319.4,151.26,328,130,328c-40.8,0-74-32.3-74-72s33.2-72,74-72c62,0,104.14,81.95,104.56,82.78h0C237,271.71,290.44,376,382,376c67.27,0,122-53.83,122-120S449.27,136,382,136Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoInfiniteSharp;
