import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-carousel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxCarousel {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 19h2c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2h2c1.1 0 2-0.9 2-2V7c0-1.1-0.9-2-2-2h-2c0-1.1-0.9-2-2-2H8c-1.1 0-2 0.9-2 2H4c-1.1 0-2 0.9-2 2v10c0 1.10.9 2 2 2zM20 7v10h-2V7h2zM8 5h8l0 14H8V5zM4 7h2v10H4V7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxCarousel;
