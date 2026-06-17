import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-mine-explosion",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiMineExplosion {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M287.59 15.3l3.5 110.96 31.54-110.96h-35.04zm-95.780.24l-1.75 236.05-170.53-43.33L130.49 377.69l-88.77-5.17 114.43 112.36-44.47-75.87L186.9 417l-51.75-109.94 110.11 79.96-12.63-185.2300 75.21 170.57 75.82-89.95-6.62 154.58 60.17-39.98-20.39 79.49 75.76-142.79-75.92 1.94L487.32 155.87l-131.4 73.08-12.26-139.69-65.41 140.34-86.43-214.06h0zM45.5 44.1L39.35 75.94 154.29 218h0l-77.6-166.84-31.18-7.07zm422.27 24.78l-31.18 7.07-43.74 107.37 81.07-82.59-6.15-31.85zM279.21 403.61c-40.18 0-72.71 32.54-72.71 72.71 0 5.730.64 10.71 1.89 16.05 7.25-32.54 36.1-56.65 70.82-56.65 34.82 0 63.67 23.97 70.82 56.66 1.22-5.28 1.89-10.4 1.89-16.05 0-40.17-32.54-72.71-72.71-72.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiMineExplosion;
