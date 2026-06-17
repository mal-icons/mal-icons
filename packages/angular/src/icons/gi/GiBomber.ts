import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-bomber",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBomber {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M220.3 22.74S90.97 121.51 87.47 156.88c-2.04 20.63 15.52 99.27 15.52 99.27s-17.6 39.47-33.96 79.43C59.52 358.81 51 434.42 51 434.42s75.3-8.54 98.44-18.09c39.8-16.43 79.11-34.11 79.11-34.11s78.57 18.05 99.24 15.97C363 394.62 461 264.42 461 264.42L220.3 22.74zm87.99 19.09l-18.39 18.47 14.71 14.77 18.4-18.47-14.72-14.77zm114.02 3.71L348.76 119.4l14.71 14.77 73.56-73.86-14.72-14.78zm-66.2 7.38l-36.77 36.94 14.71 14.77 36.78-36.93-14.72-14.77zm58.85 59.1l-36.77 36.93 14.71 14.78 36.78-36.93-14.72-14.77zm11.04 48.01l-18.39 18.47 14.71 14.77 18.4-18.47-14.71-14.77zM176.5 287.99c5.50.13 10.35 1.9 13.89 5.45 10.29 10.33 5.54 31.85-10.61 48.07-16.15 16.21-37.58 20.98-47.86 10.66-10.29-10.33-5.54-31.85 10.61-48.07 10.6-10.64 23.47-16.35 33.97-16.1zm57.08 104.02c-4.96-0.23-11.43 5.65-15.42 14.42-4.56 10.02-4.13 20.030.94 22.36 5.07 2.32 12.88-3.91 17.44-13.93 4.56-10.02 4.14-20.03-0.94-22.36-0.63-0.29-1.31-0.45-2.02-0.48zm22.51 41.36c-4.95-0.23-11.43 5.65-15.42 14.42-4.56 10.02-4.14 20.030.94 22.36 5.08 2.32 12.88-3.91 17.44-13.94 4.56-10.02 4.13-20.04-0.94-22.36-0.63-0.29-1.31-0.45-2.02-0.48zM295.03 452c-4.95-0.23-11.43 5.65-15.42 14.42-4.56 10.02-4.13 20.030.94 22.36 5.07 2.32 12.88-3.92 17.44-13.94 4.56-10.02 4.14-20.03-0.94-22.36-0.63-0.29-1.31-0.45-2.02-0.48z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBomber;
