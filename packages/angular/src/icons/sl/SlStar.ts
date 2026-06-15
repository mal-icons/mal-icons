import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-star",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlStar {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M512 77.49l137.47 285.09L962.08 409.04 735.66 634.88l7.62 45.31 45.28 270.16-276.61-148.78L235.36 950.42l45.3-270.22 7.58-45.31L61.9 409.01l312.59-46.46L395.04 320zm-0.02-61.94c-28.66 0-54.78 16.18-66.98 41.46l-115.9 240.64-266.7 39.66c-27.39 4.1-50.14 22.8-58.97 48.38-8.82 25.66-2.14 53.9 17.2 73.15l195.41 195.2-45.33 270.66c-4.56 27.28 7.23 54.62 30.37 70.58 12.72 8.74 27.66 13.15 42.62 13.15 12.32 0 24.64-2.99 35.79-8.98l232.5-125.18 232.51 125.18a75.85 75.85 0 0 0 35.78 8.98c14.96 0 29.91-4.42 42.66-13.15 23.1-15.95 34.91-43.29 30.32-70.58l-45.34-270.66 195.5-195.2c19.34-19.25 25.97-47.5 17.15-73.15-8.85-25.62-31.6-44.32-58.98-48.38l-266.66-39.66-115.97-240.64c-12.11-25.31-38.26-41.45-66.98-41.45z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlStar;
