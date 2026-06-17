import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-witch-flight",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiWitchFlight {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M254.66 18.34c-130.28 0-235.97 105.69-235.97 235.970 25.49 4.08 49.99 11.56 72.94 38.36-12.02 76.73-21.1 115.09 0l86.69-23.53-21.72-11.56c-2.52-58.15-0.82-90.49 9.81-123.03L160.5 192.72c20.21-31.09 48.12-49.4 75.53-64.81-1.94-48.21-52.63-51.76-101.06-47.75l102.31-35.06 61.1 44.97c14.09-11.64 24.93-25.64 30.03-44.97 12.95 28.39 11.9 67.48-15.28 86.03 8.56 18.70.78 43.07-18.56 49.85L330 227.66l67.75 31.13 91.97-24.94c-10.38-120.7-111.68-215.5-235.06-215.5zm38.25 191.38c-20.03 11.44-30.87 32.64-23.84 62.31l28.19 14 72.38-19.62-49.56-22.75-2.12-0.97-1.44-1.87-23.59-31.09zM490.63 253L322.5 298.56l41.59 20.69-42.59 80.53-15.62-2.12 16.75 56.69-48.69-47.44 18.44 62.5L220.13 399l14.78-11.06-52.53-7.19 73.06-64-106 28.75c-6.29 43.9-35.57 59.56-68.5 68.03 43.14 46.71 104.99 75.91 173.72 75.91 130.28 0 235.97-104.85 235.97-235.12V253z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiWitchFlight;
