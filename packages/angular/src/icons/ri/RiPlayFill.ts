import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-play-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPlayFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.38 12.42L8.78 19.48C8.55 19.64 8.24 19.57 8.08 19.34C8.03 19.26 8 19.16 8 19.07V4.93C8 4.66 8.22 4.43 8.5 4.43C8.6 4.43 8.7 4.46 8.78 4.52L19.38 11.58C19.61 11.74 19.67 12.05 19.51 12.28C19.48 12.33 19.43 12.38 19.38 12.42Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPlayFill;
