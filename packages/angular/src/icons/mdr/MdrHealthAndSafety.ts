import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-health-and-safety",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrHealthAndSafety {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.5 13h-1c-0.83 0-1.5-0.67-1.5-1.5S8.67 10 9.5 10h1V9c0-0.830.67-1.5 1.5-1.5s1.50.67 1.5 1.5v1h1c0.83 0 1.50.67 1.5 1.5s-0.67 1.5-1.5 1.5h-1v1c0 0.83-0.67 1.5-1.5 1.5s-1.5-0.67-1.5-1.5v-1zm0.8-10.74-6 2.25C4.52 4.81 4 5.55 4 6.39v4.7c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91v-4.7a2 2 0 0 0-1.3-1.87l-6-2.25c-0.45-0.18-0.95-0.18-1.4-0.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrHealthAndSafety;
