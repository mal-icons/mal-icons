import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-wavy-itinerary",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiWavyItinerary {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M20.88 15.47v44.41c6.96 245.8 209.94 234.28 332.88 332.94-10.6 5.66-23.79 9.41-40.12 11.41 44.99 10.59 84.79 44.64 104.03 89.09 23.77-62.48-3.09-115.01-25.9-164.78-2.28 16.26-6.33 29.72-12.91 40.62-65-77.15-197.6-71.96-270.37-246.22 109.48 109.29 275.86-16.45 346.78 173.88-9.74 4.95-21.56 5.98-36.47 3.09 26.28 31.01 41.22 69.58 60.03 119.91 17.42-63.92 15.82-108.23 6.03-162.41-4.77 12.2-10.07 21.87-16.41 29C415.19 8.56 195.65 151.9 75.78 15.47H20.88z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiWavyItinerary;
