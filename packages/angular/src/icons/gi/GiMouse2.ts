import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-mouse",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiMouse2 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M34.94 16.91l-13.44 13C38.82 47.84 43.22 67.7 43.94 90.53c0.71 22.83-2.91 47.96-0.84 73.41 2.07 25.45 10.68 51.64 35.44 73.38 12.55 11.02 28.98 20.9 50.5 29.59-35.85 77.34 47.8 132.47 156 132.94C271.36 402 258.74 410.08 251.28 423c-13.11 22.71-5.34 51.73 17.38 64.84 22.71 13.11 51.76 5.33 64.88-17.37 4.17-7.22 6.21-15.09 6.35-22.88 35.37 15.61 85.98 19.85 137.16 7.69-13.67-51.01-42.85-92.97-74.62-115.62 6.57-4 12.26-9.68 16.38-16.81 13.12-22.71 5.34-51.73-17.37-64.84-22.71-13.11-51.76-5.33-64.87 17.38-6.81 11.79-7.99 25.29-4.37 37.38-54.14-91.83-145.59-133.94-193.81-62.31-21.14-8.31-36.5-17.53-47.5-27.19-20.95-18.39-27.29-38.28-29.12-60.84-1.84-22.57 1.69-47.380.91-72.47-0.78-25.09-6.53-51.12-27.69-73.03z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiMouse2;
