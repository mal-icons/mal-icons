import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-trending-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrTrendingUp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m16.85 6.85 1.44 1.44-4.88 4.88-3.29-3.29a11 0 0 0-1.41 0l-6 6.01a11 0 1 0 1.41 1.41L9.41 12l3.29 3.29c0.390.39 1.020.39 1.41 0l5.59-5.58 1.44 1.44a0.50.5 0 0 0 0.85-0.35V6.5a0.480.48 0 0 0-0.49-0.5h-4.29a0.50.5 0 0 0-0.360.85z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrTrendingUp;
