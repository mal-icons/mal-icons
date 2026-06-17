import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-earth-spit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiEarthSpit {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M332.59 201.94l-44.19 84.47 109.06 9.19 62.12-7.94-35.53 20.5 13.53 9.19 56.94 10.56v-92.5l-39.31-29.53 7.5 33.72-62.84-24.69 4.19 26.13-71.47-39.09zm-129.060.59L74.16 242.97l20.63-35.25-72.87 27.69v217.47l88.75-46.97 10.47-44.5h-40.75l49.56-20.75 43.41-26.03L203.53 202.53zm143.13 107.53l-27.81 29.59 34.06 40.31 67.75 20.72 56.66 12.84-51.25 15.38 68.47 20.25v-102.25l-62.31-11.56-1.91-0.37-1.62-1.09-28.44-19.31-53.59-4.5zM184.97 329.41l-43.22 25.94-13.87 59-0.97 4.13-3.75 1.97-101.25 53.59v17.85h472.63v-23.22l-88.12-26.06-11.59-3.44 6.25-10.34 7.41-12.31-62.34-19.06-12.53 14.06 59.53 68.53-107.84-52.28 17.75-26.66-25.62-17.41-80.53 85.63 27.53-56.91-65.81-12.59 79-14.62 23.63-48.84-76.25-6.94z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiEarthSpit;
