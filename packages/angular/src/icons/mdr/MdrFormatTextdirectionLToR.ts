import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-format-textdirection-l-to-r",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFormatTextdirectionLToR {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 10v4c0 0.550.45 1 1 1s1-0.45 1-1V4h2v10c0 0.550.45 1 1 1s1-0.45 1-1V4h1c0.55 0 1-0.45 1-1s-0.45-1-1-1H9.17C7.08 2 5.22 3.53 5.02 5.61A4 4 0 0 0 9 10zm11.65 7.65-2.79-2.79a0.50.5 0 0 0-0.860.35V17H6c-0.55 0-1 0.45-1 1s0.45 1 1 1h11v1.79c0 0.450.540.670.850.35l2.79-2.79c0.2-0.190.2-0.510.01-0.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFormatTextdirectionLToR;
