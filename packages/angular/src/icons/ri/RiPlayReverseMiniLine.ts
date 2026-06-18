import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-play-reverse-mini-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPlayReverseMiniLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 8.48V15.52L8.97 12L15 8.48ZM16.25 5.44L5.74 11.57C5.5 11.71 5.42 12.01 5.56 12.25C5.6 12.33 5.67 12.39 5.74 12.43L16.25 18.56C16.49 18.7 16.79 18.62 16.93 18.38C16.98 18.31 17 18.22 17 18.13V5.87C17 5.59 16.78 5.37 16.5 5.37C16.41 5.37 16.32 5.39 16.25 5.44Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPlayReverseMiniLine;
