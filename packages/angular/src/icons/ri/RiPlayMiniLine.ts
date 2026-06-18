import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-play-mini-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPlayMiniLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 8.48V15.52L15.03 12L9 8.48ZM7.75 5.44L18.26 11.57C18.5 11.71 18.58 12.01 18.44 12.25C18.4 12.33 18.33 12.39 18.26 12.43L7.75 18.56C7.51 18.7 7.21 18.62 7.07 18.38C7.02 18.31 7 18.22 7 18.13V5.87C7 5.59 7.22 5.37 7.5 5.37C7.59 5.37 7.68 5.39 7.75 5.44Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPlayMiniLine;
