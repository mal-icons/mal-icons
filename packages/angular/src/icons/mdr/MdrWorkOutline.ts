import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-work-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrWorkOutline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 6V4h-4v2h4zM4 9v9c0 0.550.45 1 1 1h14c0.55 0 1-0.45 1-1V9c0-0.55-0.45-1-1-1H5c-0.55 0-1 0.45-1 1zm16-3c1.11 0 2 0.89 2 2v11c0 1.11-0.89 2-2 2H4c-1.11 0-2-0.89-2-2l0.01-11c0-1.110.88-2 1.99-2h4V4c0-1.110.89-2 2-2h4c1.11 0 2 0.89 2 2v2h4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrWorkOutline;
