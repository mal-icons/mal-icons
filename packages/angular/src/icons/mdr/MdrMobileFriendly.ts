import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-mobile-friendly",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrMobileFriendly {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 1H9c-1.1 0-2 0.9-2 2v2c0 0.550.45 1 1 1s1-0.45 1-1V4h10v16H9v-1c0-0.55-0.45-1-1-1s-1 0.45-1 1v2c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2V3c0-1.1-0.9-2-2-2zM7.01 13.47l-1.92-1.92c-0.35-0.35-0.92-0.35-1.27 0s-0.350.92 0 1.27l2.47 2.47c0.390.39 1.020.39 1.41 0l5.85-5.85c0.35-0.350.35-0.92 0-1.27s-0.92-0.35-1.27 0l-5.27 5.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrMobileFriendly;
