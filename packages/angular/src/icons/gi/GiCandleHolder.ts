import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-candle-holder",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCandleHolder {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M290.75 14.63c-14.07 0-47.34 43.99-47.34 79.97 0 26.67 11.15 44.41 38.38 46.81 3.65-21.18 3.14-42.01-3-62.87l17.91-5.28c6.65 22.62 7.46 45.27 4.09 67.63 27.62-3.88 37.28-20.54 37.28-46.28 0-35.98-33.65-79.97-47.31-79.97zm-45.19 140.06v11.84l-0.19-3.9c0.77 26.39-17.41 28.69-17.12 48.160.23 15.37 12.17 20.08 17.31 12.69v145.75h97.16v-83.5c6.51 7.5 19.83 1.55 20.09-16.220.31-20.77-16.87-25.29-20.09-48.22v-66.59c-32.39 10.28-65.8 9.8-97.16 0zM113.63 285.34c-19.430.01-37.23 10.32-48.09 26.13-14.48 21.07-17.48 52.02-0.81 81.41 7.81 13.78 4.41 25.93-2.13 32.28-6.53 6.35-15.49 8.59-27.56-2.53l-12.65 13.72c17.56 16.18 40.3 14.81 53.25 2.22 12.95-12.59 16.81-34.69 5.34-54.91-13.47-23.75-10.43-46.47-0.03-61.59 10.4-15.12 27.31-22.52 45.97-15.59 23.74 8.82 34.46 29.8 32.81 48.12-1.35 15.06-9.98 28.62-30.09 33.44h-25.69c3.31 6.74 7.15 13.26 11.41 19.53l0.03 1c0.21-0.010.42-0.020.63-0.03 10.88 15.77 24.69 29.97 41.06 42.16H443c23.29-17.33 41.91-38.45 53.75-62.66H164.28c8.21-9.01 13.02-20.16 14.06-31.78 2.41-26.86-13.75-55.69-44.94-67.28-6.65-2.47-13.3-3.63-19.78-3.63z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCandleHolder;
