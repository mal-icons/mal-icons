import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-grid-3x3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrGrid3x3 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 9c0-0.55-0.45-1-1-1h-3V5c0-0.55-0.45-1-1-1s-1 0.45-1 1v3h-4V5c0-0.55-0.45-1-1-1s-1 0.45-1 1v3H5c-0.55 0-1 0.45-1 1s0.45 1 1 1h3v4H5c-0.55 0-1 0.45-1 1s0.45 1 1 1h3v3c0 0.550.45 1 1 1s1-0.45 1-1v-3h4v3c0 0.550.45 1 1 1s1-0.45 1-1v-3h3c0.55 0 1-0.45 1-1s-0.45-1-1-1h-3v-4h3c0.55 0 1-0.45 1-1zm-6 5h-4v-4h4v4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrGrid3x3;
