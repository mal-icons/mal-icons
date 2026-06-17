import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-encirclement",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiEncirclement {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M204.73 38.03L64 64l43.87 21.79C60.79 127.07 31 187.62 31 255c0 124.05 100.95 225 225 225s225-100.95 225-225c0-67.38-29.78-127.93-76.87-169.21L448 64 307.27 38.03 370.93 166.2l9.83-53.3C420.17 147.5 445 198.28 445 255c0 104.6-84.4 189-189 189S67 359.6 67 255c0-56.72 24.83-107.5 64.23-142.1l9.83 53.3zm73.99 81.13c-8.39 0-15 6.61-15 15 0 8.39 6.61 15 15 15 8.39 0 15-6.61 15-15 0-8.39-6.61-15-15-15zm-75.37 68.5c-8.39 0-15 6.61-15 15 0 8.39 6.61 15 15 15 8.39 0 15-6.61 15-15 0-8.39-6.61-15-15-15zm129.14-15.23c-8.39 0-15 6.61-15 15 0 8.39 6.61 15 15 15 8.39 0 15-6.61 15-15 0-8.39-6.61-15-15-15zm-205.29 35.61c-8.39 0-15 6.61-15 15 0 8.39 6.61 15 15 15s15-6.61 15-15c0-8.39-6.61-15-15-15zm123.6 23.99c-8.39 0-15 6.61-15 15 0 8.39 6.61 15 15 15 8.39 0 15-6.61 15-15 0-8.39-6.61-15-15-15zm51.69 6.82c-8.39 0-15 6.61-15 15 0 8.39 6.61 15 15 15 8.39 0 15-6.61 15-15 0-8.39-6.61-15-15-15zm72.46 11.83c-8.39 0-15 6.61-15 15 0 8.39 6.61 15 15 15 8.39 0 15-6.61 15-15 0-8.39-6.61-15-15-15zm-197.1 20.27c-8.39 0-15 6.61-15 15 0 8.39 6.61 15 15 15 8.39 0 15-6.61 15-15 0-8.39-6.61-15-15-15zm75.45 29.64c-8.39 0-15 6.61-15 15s6.61 15 15 15c8.39 0 15-6.61 15-15s-6.61-15-15-15zm96.44 15.34c-8.39 0-15 6.61-15 15 0 8.39 6.61 15 15 15 8.39 0 15-6.61 15-15 0-8.39-6.61-15-15-15zm-186.35 33.08c-8.39 0-15 6.61-15 15 0 8.39 6.61 15 15 15 8.39 0 15-6.61 15-15 0-8.39-6.61-15-15-15zm109.12 24.38c-8.39 0-15 6.61-15 15 0 8.39 6.61 15 15 15 8.39 0 15-6.61 15-15 0-8.39-6.61-15-15-15z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiEncirclement;
