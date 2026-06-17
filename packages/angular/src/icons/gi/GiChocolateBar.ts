import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-chocolate-bar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiChocolateBar {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M296.39 64.97s-17.45 15.54-26.69 12.29c-3.34-1.17-6.1-4.45-8.35-8.49L244.4 85.71l84.58 84.58 60.26-60.26-14.95-14.95c-3.33 1.34-6.57 2.1-9.42 1.84-10.1-0.91-23.53-19.32-23.53-19.32S325.56 92.59 316.4 90.6c-10.59-2.3-20.01-25.64-20.01-25.64zm-64.71 33.47l-60.25 60.26L256 243.27l60.25-60.25zm170.29 24.33l-60.26 60.26 84.58 84.58 60.26-60.26zM158.69 171.42l-44.8 44.8 100.49 68.68L243.27 256zm170.29 24.33L268.73 256l84.58 84.58 60.26-60.25zM78.49 213.83L48.85 278.02l85.730.11 48.12 93.86 72.02-17.42 49.99 79.27 29.12-45.5zM256 268.73l-26.5 26.5 100.49 68.68 10.6-10.6zM34.11 296l-8.65 8.65 181.89 181.89 67.05-67.05-28-44.4-73.24 17.71-49.58-96.7L34.78 296z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiChocolateBar;
