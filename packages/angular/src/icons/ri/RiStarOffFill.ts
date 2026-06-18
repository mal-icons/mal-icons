import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-star-off-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiStarOffFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.41 8.79L18.02 13.78L9.71 5.47L12 0.5L15.39 7.84L23.41 8.79ZM18.62 20.04L21.19 22.61L22.61 21.19L2.81 1.39L1.39 2.81L6.66 8.07L0.59 8.79L6.52 14.28L4.95 22.21L12 18.26L19.05 22.21L18.62 20.04Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiStarOffFill;
