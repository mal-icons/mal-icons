import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-eyedropper",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiEyedropper {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M72.16 21.91c-19.51-0.1-34.19 10.36-43.47 26.47-14.85 25.78-10.26 56.35 29.85 79.56 26.35 15.25 61.53 23.54 86.75 20.13l-11.37 19.72 15.25 8.81 49.69-86.25-15.25-8.81-10.5 18.22c-9.66-23.6-34.39-49.97-60.75-65.22-15.04-8.7-28.48-12.57-40.19-12.62zm134.38 92.53l-9.34 16.22 171.75 99.38h-56.25l-129.56-75-9.34 16.19L382.53 292l3.38 1.97 3.75-1.03c3.71-1.01 10.98-0.39 18.34 1.84 7.36 2.24 14.84 5.78 19.66 8.56l2.19 1.25h0.72c0.220.080.460.140.690.22-0.38 1.39-0.59 2.86-0.59 4.37 0 9.16 7.43 16.59 16.59 16.59 9.16 0 16.59-7.43 16.59-16.59 0-6.5-3.75-12.09-9.19-14.81 1.87-3.64 2.85-7.85 2.16-12.41-0.77-5.07-4.17-10.32-9.19-13.22-10.71-6.2-25.41-17.44-27.97-27.69l-0.97-3.84-3.44-1.97-208.72-120.81zm242.94 235.47c-18.66 69.63-44.59 59.99-44.59 100.75 0 24.62 19.98 44.56 44.59 44.56 24.61 0 44.59-19.95 44.59-44.56 0-44-25.6-29.87-44.59-100.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiEyedropper;
