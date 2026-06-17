import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-skip-forward-circle-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSkipForwardCircleFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.79 5.09A0.50.5 0 0 0 4 5.5v5a0.50.5 0 0 0 0.790.41L7.5 8.97V10.5a0.50.5 0 0 0 0.790.41L11 8.97V10.5a0.50.5 0 0 0 1 0v-5a0.50.5 0 0 0-1 0v1.53L8.29 5.09a0.50.5 0 0 0-0.790.41v1.53z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSkipForwardCircleFill;
