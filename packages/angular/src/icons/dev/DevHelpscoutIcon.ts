import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-helpscout-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevHelpscoutIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M87.4 351.1 263 175.6A124.6 124.6 0 0 0 264 0L88.6 175.6a124 124 0 0 0-1 175.6m425.2-102.6L337 424.1a124.6 124.6 0 0 0-1 175.6L511.4 424a124 124 0 0 0 1-175.6m-1.1-72.6a124.6 124.6 0 0 0 1-175.6L88.3 424a124.5 124.5 0 0 0-1 175.9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevHelpscoutIcon;
