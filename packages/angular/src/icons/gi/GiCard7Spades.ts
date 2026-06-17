import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-card-7-spades",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCard7Spades {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M119.44 36c-16.13 0-29.2 17.24-29.2 38.5v363c0 21.26 13.07 38.5 29.2 38.5h275.3c16.13 0 29.2-17.24 29.2-38.5V74.5c0-21.26-13.07-38.5-29.2-38.5H119.44zm26.65 8.05s46.34 33.84 47.27 63.07c0.78 24.29-25.02 32.12-40.77 18.59l13.63 32.65H126.1l13.62-32.63c-15.53 13.88-40.01 5.35-40.76-18.6-0.88-28.01 47.13-63.07 47.13-63.07zm57.85 132.61c7.77 1.98 16.17 2.97 25.2 2.97h73.94v5.47c-10.86 19.1-18.98 35.27-24.37 48.5-5.39 13.16-9.47 25.76-12.24 37.8-2.77 12.05-4.6 26.07-5.47 42.08-0.79 13.24-1.55 21.44-2.26 24.61-0.71 3.09-2.18 5.47-4.4 7.13-2.14 1.74-4.95 2.62-8.44 2.62-3.96 0-7.05-1.35-9.27-4.04-2.22-2.69-3.33-6.93-3.33-12.72 0-5.150.91-11.57 2.73-19.26 1.82-7.77 5.98-19.34 12.48-34.71 8.64-20.6 16.13-36.81 22.47-48.62l16.4-30.19h-64.43c-4.75 0-8.32 1.66-10.7 4.99-2.3 3.33-5.07 13.28-8.32 29.84h-8.56l8.56-56.46zM345.78 353.65h40.12l-13.63 32.65c15.75-13.54 41.55-5.7 40.78 18.59-0.93 29.23-47.27 63.07-47.27 63.07v0s-48.01-35.06-47.13-63.07c0.75-23.95 25.22-32.49 40.76-18.61l-13.61-32.63z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCard7Spades;
