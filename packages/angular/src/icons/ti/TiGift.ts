import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-gift",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiGift {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 8h-2.35c0.22-0.460.35-0.960.35-1.5 0-1.93-1.57-3.5-3.5-3.5-0.98 0-1.860.41-2.5 1.06-0.64-0.65-1.52-1.06-2.5-1.06-1.93 0-3.5 1.57-3.5 3.5 0 0.540.13 1.040.35 1.5h-2.35c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1v5c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3v-5c0.55 0 1-0.45 1-1v-4c0-0.55-0.45-1-1-1zm-1 4h-5v-2h5v2zm-8-5h2v1h-2v-1zm2 3v2h-2v-2h2zm1.5-5c0.83 0 1.50.67 1.5 1.5s-0.67 1.5-1.5 1.5c-0.18 0-0.34-0.04-0.5-0.1v-0.9c0-0.52-0.4-0.94-0.91-0.980.2-0.590.76-1.02 1.41-1.02zm-6.5 1.5c0-0.830.67-1.5 1.5-1.50.66 0 1.210.43 1.41 1.02-0.510.05-0.910.46-0.910.98v0.9c-0.160.06-0.320.1-0.50.1-0.83 0-1.5-0.67-1.5-1.5zm2 3.5v2h-5v-2h5zm-3 10c-0.55 0-1-0.45-1-1v-6h4v7h-3zm4 0v-7h2v7h-2zm6 0h-3v-7h4v6c0 0.55-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiGift;
