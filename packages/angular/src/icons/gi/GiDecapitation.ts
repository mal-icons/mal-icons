import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-decapitation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiDecapitation {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M316.94 18.41c-16.920.16-35.99 8.39-51.34 23.81-25.85 25.97-31.42 62.47-12.44 81.53 18.98 19.06 55.33 13.47 81.19-12.5C360.2 85.28 365.76 48.78 346.78 29.72c-7.71-7.74-18.27-11.42-29.84-11.31zM26.13 33.34C68.1 93.84 134.52 136.71 204.19 163.87c0.770.3 1.540.58 2.310.88 74.68 28.29 158.99 40.7 228.22 31.880.07-0.010.14-0.020.22-0.03 73.4-13.26 89.24-60.58-38.56-134.25 163.39 147.97-242.19 125.14-370.25-29zM220.28 189.69c-3.95 2.14-7.55 4.61-10.87 7.38-12.2 10.16-20.78 24.71-26.75 42.19-10.99 32.16-12.56 73.36-13.37 109.56h40.06l0.63 8.66 10.22 136.47h86.69l9.03-136.410.6-8.72h38.53c1.69-40.39-0.06-81.07-12.25-111.59-3.29-8.26-7.23-15.8-12-22.5-36.92-4.4-74.49-12.92-110.5-25.03z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiDecapitation;
