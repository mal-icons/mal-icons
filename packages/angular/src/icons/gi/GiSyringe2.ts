import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-syringe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSyringe2 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M289.02 237.92v-39.87c0-3.27-1.52-8.12-12.27-8.12-10.75 0-12.27 4.84-12.27 8.12v39.87c0 3.28 2.13 7.02 12.27 7.02 10.14 0 12.27-3.74 12.27-7.02zM249.62 493.79l-3.03-116.78c-14.21-0.53-22.39-0.73-29.97-2.65-5.25-1.33-7.84-5.11-7.84-10.97V195.89c0-3.86-0.34-6.15-6.5-6.11-10.440.08-51.270.59-51.270.59l7.57-13.05c1.41-2.42 2.7-4.23 6.36-4.23 2.63 0 23.33 2.56 37.49 1.18 7.21-0.7 10.42-1.53 13.65-6.43 5.73-8.68 4.58-29.61-5.78-44.14-2.51-3.520.2-6.64 4.6-5.2 9.62 3.14 25.75 2.66 25.75 2.66V39.16c0-2.79-1.66-4.41-5.02-4.41h-58.38s7.98-15.59 19.53-17.21c12.62-1.78 39.49-1.53 59.25-1.53 19.76 0 46.63-0.25 59.25 1.53 11.55 1.63 19.53 17.21 19.53 17.21H276.39c-3.36 0-5.02 1.63-5.02 4.41v81.99s16.120.48 25.75-2.66c4.4-1.43 7.11 1.68 4.6 5.2-10.36 14.53-11.51 35.46-5.78 44.14 3.23 4.9 6.44 5.73 13.65 6.43 14.15 1.38 34.86-1.18 37.48-1.18 3.67 0 4.96 1.81 6.36 4.23L361 190.38s-40.84-0.51-51.28-0.59c-6.16-0.05-6.5 2.25-6.5 6.11V363.4c0 5.86-2.59 9.64-7.84 10.97-7.58 1.91-15.76 2.12-29.97 2.65l-3.03 116.78c-0.05 1.92-3 2.21-6.38 2.21-3.38 0-6.33-0.29-6.38-2.21zm-14.37-248.86c10.14 0 12.27-3.74 12.27-7.02v-39.87c0-3.27-1.52-8.12-12.27-8.12-10.75 0-12.27 4.84-12.27 8.12v39.87c0 3.28 2.13 7.02 12.27 7.02z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSyringe2;
