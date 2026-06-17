import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-power-button",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiPowerButton {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M228.58 26.21v207.32h54.85V26.21h-54.85zm-28.52 45.74C108.44 96.58 41 180.22 41 279.61c0 118.74 96.26 215 215 215 118.74 0 215-96.26 215-215 0-99.39-67.44-183.02-159.06-207.65v50.47c64.6 22.99 110.85 84.68 110.85 157.18 0 92.12-74.68 166.79-166.79 166.79-92.12 0-166.79-74.68-166.79-166.79 0-72.49 46.25-134.18 110.85-157.18v-50.47z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiPowerButton;
