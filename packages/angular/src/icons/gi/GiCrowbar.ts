import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-crowbar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCrowbar {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M417.19 30.74c13 11.13 42.59 56.35 39.31 97.64-1.06 43.45-8.04 83.12-20.33 115.91l-53.44 63.67c-11.52 28-20.44 60.49-33.02 84.76l-15.93-8.38c13.34-29.75 23.77-60.04 33.15-85.55l53.42-63.64c27.66-74.69 20.84-130.91 2.62-166.08-46.75-89.71-131.49 12.93-167.7 64.82l-95.97 132.59s9.63 11.59 16.13 19.24c14.85-20.45 67.17-89.81 104.82-133.75 27.56-32.17 71.88-85.73 102.04-69.33 8.76 4.65 9.27 9.78 14.37 27.26 5.1 17.49 4.99 106.23-14.24 145.1l-30.47 38.74-31.23 97.5 21.19 17.35 19.99-3.47 51.7-71.85-16.33 59.62-7.42 27.4-10.05 4.75 26.96 5.35 5.52-5.54c8.46-13.59 35.28-53.34 44.08-83.32l4.41-82.33c27.85-64.09 49.87-167.23-21.46-219.37-10.93-6.94-10.95-6.95-22.1-9.08zm-55.82 73.03c-23.09 10.19-39.4 27.09-66.65 58.68-43.98 50.97 0 0-104.38 133.34 8.86 3.52 21.66 8.97 21.66 8.97 45.56-49.32 113.52-196.82 184.64-194.86-1.83-3.83-4.21-6.54-6.68-8.35-9.06-5.91-19.99-2.06-28.59 2.23zm-211.68 174.83L18 460.73V494h57.52l128.47-177.69-32.3-11.54z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCrowbar;
