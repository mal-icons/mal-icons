import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-subtitles-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfSubtitlesOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 4H6.83l8 8H20v2h-3.17l4.93 4.93c0.15-0.280.24-0.590.24-0.93V6c0-1.1-0.9-2-2-2zM1.04 3.87l1.2 1.2C2.09 5.35 2 5.66 2 6v12c0 1.10.9 2 2 2h13.17l2.96 2.96 1.41-1.41L2.45 2.45 1.04 3.87zM8 12v2H4v-2h4zm6 4.83V18H4v-2h9.17l0.830.83z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfSubtitlesOff;
