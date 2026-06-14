import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-rss-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcRss16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 2.73a0.750.75 0 0 1 0.8-0.7C8.79 2.42 13.58 7.21 13.97 13.2a0.750.75 0 0 1-1.50.1 10.5 10.5 0 0 0-9.78-9.780.750.75 0 0 1-0.7-0.8ZM2.84 7.05h0a7 7 0 0 1 6.11 6.110.750.75 0 0 1-1.490.18 5.5 5.5 0 0 0-4.8-4.80.750.75 0 0 1 0.18-1.49ZM2 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcRss16;
