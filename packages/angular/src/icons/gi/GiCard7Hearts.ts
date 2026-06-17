import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-card-7-hearts",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCard7Hearts {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M119.44 36c-16.13 0-29.2 17.24-29.2 38.5v363c0 21.26 13.07 38.5 29.2 38.5h275.3c16.13 0 29.2-17.24 29.2-38.5v-363c0-21.26-13.07-38.5-29.2-38.5H119.44zm57.21 16.17c13.61-0.32 26.5 9.85 27.08 28.040.98 31.09-47.74 52.95-52.31 70.02-5-18.65-51.41-37.57-52.45-70.01-0.99-31.15 37.4-37.91 52.45-11.85 6.26-10.85 15.92-15.98 25.24-16.19v0zm28.37 124.48c7.77 1.98 16.17 2.97 25.2 2.97h73.94v5.47c-10.86 19.1-18.98 35.27-24.37 48.5-5.39 13.16-9.47 25.76-12.24 37.8-2.77 12.05-4.59 26.07-5.47 42.08-0.79 13.23-1.55 21.44-2.26 24.61-0.71 3.09-2.18 5.47-4.4 7.13-2.14 1.74-4.95 2.62-8.44 2.62-3.96 0-7.05-1.35-9.27-4.04-2.22-2.69-3.33-6.94-3.33-12.72 0-5.150.91-11.57 2.73-19.25 1.82-7.77 5.98-19.34 12.48-34.71 8.64-20.6 16.13-36.81 22.47-48.62l16.4-30.19h-64.43c-4.75 0-8.32 1.66-10.7 4.99-2.3 3.33-5.07 13.28-8.32 29.84h-8.56l8.56-56.46zm155.71 185.12c4.57 17.07 53.29 38.92 52.31 70.02-0.57 18.19-13.46 28.36-27.07 28.04h0c-9.31-0.22-18.98-5.35-25.24-16.19-15.05 26.06-53.45 19.31-52.45-11.85 1.04-32.44 47.45-51.37 52.45-70.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCard7Hearts;
