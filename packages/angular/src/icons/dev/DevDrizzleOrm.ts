import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-drizzle-orm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevDrizzleOrm {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M139 295.7a25 25 0 0 0-9.6-34.4 26 26 0 0 0-34.8 9.6l-82 143a25 25 0 0 0 9.6 34.5 26 26 0 0 0 34.8-9.7zM315.6 186a25 25 0 0 0-9.6-34.4 26 26 0 0 0-34.8 9.7l-82 143a25 25 0 0 0 9.6 34.4 26 26 0 0 0 34.9-9.6zm271.8 0a25 25 0 0 0-9.6-34.4 26 26 0 0 0-34.8 9.7l-82 143a25 25 0 0 0 9.6 34.4 26 26 0 0 0 34.8-9.6zM410.7 295.7a25 25 0 0 0-9.6-34.4 26 26 0 0 0-34.8 9.6l-82 143a25 25 0 0 0 9.6 34.5 26 26 0 0 0 34.9-9.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevDrizzleOrm;
