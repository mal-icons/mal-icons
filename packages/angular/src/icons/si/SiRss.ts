import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-rss",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRss {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.2 24C19.2 13.47 10.53 4.8 0 4.8V0c13.17 0 24 10.84 24 24h-4.8zM3.29 17.42c1.81 0 3.29 1.48 3.29 3.3 0 1.81-1.48 3.29-3.3 3.29C1.47 24 0 22.53 0 20.71s1.48-3.29 3.29-3.29zM15.91 24h-4.66c0-6.17-5.07-11.24-11.24-11.24V8.09c8.73 0 15.91 7.18 15.91 15.91z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRss;
