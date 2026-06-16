import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-flip",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFlip {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 21h2v-2h-2v2zm4-12h2V7h-2v2zM3 5v14c0 1.10.9 2 2 2h3c0.55 0 1-0.45 1-1s-0.45-1-1-1H6c-0.55 0-1-0.45-1-1V6c0-0.550.45-1 1-1h2c0.55 0 1-0.45 1-1s-0.45-1-1-1H5c-1.1 0-2 0.9-2 2zm16-2v2h2c0-1.1-0.9-2-2-2zm-7 20c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1s-1 0.45-1 1v20c0 0.550.45 1 1 1zm7-6h2v-2h-2v2zM15 5h2V3h-2v2zm4 8h2v-2h-2v2zm0 8c1.1 0 2-0.9 2-2h-2v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFlip;
