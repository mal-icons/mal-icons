import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-screenshot-monitor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfScreenshotMonitor {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 3H4c-1.11 0-2 0.89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-0.9 2-2V5a2 2 0 0 0-2-2zm0 14H4V5h16v12z"}],["path",{"d":"M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfScreenshotMonitor;
