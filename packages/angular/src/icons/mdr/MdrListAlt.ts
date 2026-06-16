import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-list-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrListAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 9h4c0.55 0 1-0.45 1-1s-0.45-1-1-1h-4c-0.55 0-1 0.45-1 1s0.45 1 1 1zm0 4h4c0.55 0 1-0.45 1-1s-0.45-1-1-1h-4c-0.55 0-1 0.45-1 1s0.45 1 1 1zm0 4h4c0.55 0 1-0.45 1-1s-0.45-1-1-1h-4c-0.55 0-1 0.45-1 1s0.45 1 1 1zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20 3H4c-0.55 0-1 0.45-1 1v16c0 0.550.45 1 1 1h16c0.55 0 1-0.45 1-1V4c0-0.55-0.45-1-1-1zm-1 16H5V5h14v14z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrListAlt;
