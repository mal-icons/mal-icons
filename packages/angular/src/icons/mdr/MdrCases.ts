import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-cases",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCases {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 5V3c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v2H7c-1.1 0-2 0.9-2 2v9c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V7c0-1.1-0.9-2-2-2h-3zm-2 0h-4V3h4v2zM2 9c-0.55 0-1 0.45-1 1v10c0 1.10.9 2 2 2h15c0.55 0 1-0.45 1-1s-0.45-1-1-1H3V10c0-0.55-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCases;
