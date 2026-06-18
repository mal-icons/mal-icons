import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-skip-forward-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSkipForwardFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 12.67L5.78 19.48C5.55 19.63 5.24 19.57 5.08 19.34C5.03 19.26 5 19.16 5 19.07V4.93C5 4.66 5.22 4.43 5.5 4.43C5.6 4.43 5.7 4.46 5.78 4.52L16 11.33V5C16 4.45 16.45 4 17 4C17.55 4 18 4.45 18 5V19C18 19.55 17.55 20 17 20C16.45 20 16 19.55 16 19V12.67Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSkipForwardFill;
