import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-format-textdirection-r-to-l",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFormatTextdirectionRToL {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 10v4c0 0.550.45 1 1 1s1-0.45 1-1V4h2v10c0 0.550.45 1 1 1s1-0.45 1-1V4h1c0.55 0 1-0.45 1-1s-0.45-1-1-1h-6.83C8.08 2 6.22 3.53 6.02 5.61A4 4 0 0 0 10 10zm-2 7v-1.79c0-0.45-0.54-0.67-0.85-0.35l-2.79 2.79c-0.20.2-0.20.51 0 0.71l2.79 2.79a0.50.5 0 0 0 0.85-0.36V19h11c0.55 0 1-0.45 1-1s-0.45-1-1-1H8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFormatTextdirectionRToL;
