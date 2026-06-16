import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-face-4",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoFace4 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M353.78-303Q331-303 315.5-318.73q-15.5-15.73-15.5-38.5Q300-380 315.73-395.5q15.73-15.5 38.5-15.5Q377-411 392.5-395.27q15.5 15.73 15.5 38.5Q408-334 392.28-318.5q-15.73 15.5-38.5 15.5Zm253 0Q584-303 568.5-318.73q-15.5-15.73-15.5-38.5Q553-380 568.73-395.5q15.73-15.5 38.5-15.5Q630-411 645.5-395.27q15.5 15.73 15.5 38.5Q661-334 645.28-318.5q-15.73 15.5-38.5 15.5ZM480-60q142.38 0 241.19-98.95Q820-257.89 820-400.46 820-426 816-451q-4-25-10-46-20 5-43.26 7-23.26 2-48.74 2-97.11 0-183.56-40Q444-568 383-642q-34 81-97.5 141.5T140-406.86V-400q0 142.38 98.81 241.19Q337.63-60 480-60Zm-92-667q88 103 162.5 141T714-548q24 0 38-1t31-6q-45-81-122.5-133T480-740q-27 0-51 4t-41 9ZM149-478q48-18 109.5-81.5T346-713q-87 39-131.5 99.5T149-478Zm239-249Zm-42 14ZM117-569q30-64 80-114t114-80q-19-26-47.99-41.5Q234.03-820 199-820q-58.4 0-98.7 40.3Q60-739.4 60-681q0 35.03 15.5 64.01Q91-588 117-569ZM480 0q-83 0-156-31.5T197-117q-54-54-85.5-127T80-400q0-29 4-57.5T96-512q-43-26-69.5-70.5T0-681q0-83 58-141t141-58q53 0 97.5 25.5T368-784q26-8 54.5-12t57.5-4q83 0 156 31.5T763-683q54 54 85.5 127T880-400q0 83-31.5 156T763-117q-54 54-127 85.5T480 0ZM197-683Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoFace4;
