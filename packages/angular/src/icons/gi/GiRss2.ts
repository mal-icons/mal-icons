import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-rss",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiRss2 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M204.34 15.66c-1.83 41.51-21.64 86.79-58.31 123.47-36.46 36.46-81.78 56.62-123.09 58.66 50.01 17.25 107.82 5.87 147.72-34.03 39.9-39.9 51.21-97.95 33.69-148.09zM21.28 20.38v115.97c9.57 3.68 20.1 5.84 30.85 5.84 47.22 0 85.09-37.86 85.09-85.06 0-12.95-3.6-25.45-9.13-36.75H21.28zm261.06 4.22c-2.53 57.28-29.82 119.79-80.44 170.41-50.32 50.32-112.86 78.13-169.87 80.94 69.02 23.8 148.78 8.1 203.85-46.97 55.27-55.27 70.65-135.17 46.47-204.37zM370 27.25c-3.39 76.7-39.92 160.39-107.69 228.16-67.38 67.38-151.13 104.62-227.47 108.38 92.41 31.87 199.21 10.83 272.94-62.9 74.01-74.01 94.6-180.97 62.22-273.62zm101.75 22.03c-4.19 94.9-49.43 198.43-133.28 282.28-83.36 83.37-186.99 129.48-281.44 134.13 114.35 39.43 246.49 13.42 337.72-77.81 91.57-91.57 117.06-223.95 77-338.59z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiRss2;
