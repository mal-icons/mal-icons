import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-rss-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfRssAlt {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.17 17h-1c0-5.51-4.56-10-10.17-10v-1c6.16 0 11.17 4.93 11.17 11zM0 0v1c8.97 0 16 7.03 16 16h1c0-9.53-7.47-17-17-17zM4 15c0-1.1-0.9-2-2-2-1.1 0-2 0.9-2 2 0 1.1 0.9 2 2 2 1.1 0 2-0.9 2-2zM3 15c0 0.55-0.45 1-1 1-0.55 0-1-0.45-1-1 0-0.55 0.45-1 1-1 0.55 0 1 0.45 1 1z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfRssAlt;
