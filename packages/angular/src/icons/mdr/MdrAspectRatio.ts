import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-aspect-ratio",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAspectRatio {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 12c-0.55 0-1 0.45-1 1v2h-2c-0.55 0-1 0.45-1 1s0.45 1 1 1h3c0.55 0 1-0.45 1-1v-3c0-0.55-0.45-1-1-1zM7 9h2c0.55 0 1-0.45 1-1s-0.45-1-1-1H6c-0.55 0-1 0.45-1 1v3c0 0.550.45 1 1 1s1-0.45 1-1V9zm14-6H3c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h18c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm-1 16.01H4c-0.55 0-1-0.45-1-1V5.99c0-0.550.45-1 1-1h16c0.55 0 1 0.45 1 1v12.02c0 0.55-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAspectRatio;
