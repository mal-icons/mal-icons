import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-hedjet-white-crown",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiHedjetWhiteCrown {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M279.15 488.21l30.9-35.47c-8.54-20.09-28.76-48.9-11.59-64.96 18.37-16.21 31.6 6.59 46 13.7 19.63-26.18 38.93-50.19 63.21-67.07-40.06-116.66-159.07-180.15-195.94-214.58-18.14-21.63-37.85-65.98-45.31-73.98-6.99-7.49-28.24-36.45-52.47-13.12-13.96 13.44-11.8 30.60.32 50.63 8.93 14.75 21.83 28.18 36.31 53.19 29.83 51.52 28.35 139.12 35.99 170.66 12.31 50.78 16.17 99.15 92.57 181.02z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiHedjetWhiteCrown;
