import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-browsersync",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevBrowsersync {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M328.6 178.4v414.2c0 4.4 4.4 7.2 8.3 5l158.9-86.4a6 6 0 0 0 2.8-5V271.5q-0.1-3.3-2.8-5l-158.4-92.9c-3.8-2.2-8.80.5-8.8 5M306 594.3V5.7c0-3.8-3.8-6.6-7.6-5.5L105.3 71.7c-2.2 1.1-3.9 2.8-3.9 5.5V525c0 2.2 1.7 4.4 3.9 5.5l193 69.3c3.9 1 7.8-1.7 7.8-5.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevBrowsersync;
