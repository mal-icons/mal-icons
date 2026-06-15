import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-tumblr-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfTumblrAlt {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.1 0.5v4.04h3.79v2.51h-3.79v4.1c0 0.93 0.04 1.52 0.15 1.79 0.09 0.26 0.28 0.47 0.54 0.63 0.35 0.22 0.76 0.32 1.22 0.32 0.81 0 1.62-0.26 2.42-0.79v2.52c-0.69 0.32-1.3 0.55-1.85 0.68-0.55 0.14-1.16 0.2-1.8 0.2-0.73 0-1.37-0.09-1.94-0.28-0.56-0.18-1.04-0.45-1.44-0.78-0.39-0.34-0.68-0.71-0.82-1.09-0.16-0.39-0.23-0.95-0.23-1.68v-5.61h-1.77v-2.26c0.62-0.21 1.17-0.5 1.61-0.87 0.45-0.39 0.8-0.84 1.07-1.37 0.27-0.54 0.46-1.22 0.56-2.04h2.28z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfTumblrAlt;
