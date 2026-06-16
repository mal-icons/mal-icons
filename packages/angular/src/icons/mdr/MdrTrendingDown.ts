import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-trending-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrTrendingDown {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m16.85 17.15 1.44-1.44-4.88-4.88-3.29 3.29a11 0 0 1-1.41 0l-6-6.01A11 0 1 1 4.12 6.7L9.41 12l3.29-3.29a11 0 0 1 1.41 0l5.59 5.58 1.44-1.44a0.50.5 0 0 1 0.850.35v4.29c0 0.28-0.220.5-0.50.5H17.2c-0.440.01-0.66-0.53-0.35-0.84z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrTrendingDown;
