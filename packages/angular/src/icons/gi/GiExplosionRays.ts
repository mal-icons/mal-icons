import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-explosion-rays",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiExplosionRays {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M54.18 19.51l116.02 144.84c-11.81 9.74-21.4 22.07-27.92 36.1L20.49 142.73v62.99l113.98 19.17c-1.12 6.06-1.71 12.3-1.71 18.67 0 3.50.18 6.970.52 10.38l-72.38 27.7 79.470.69c4.17 10.17 9.92 19.53 16.95 27.78L20.49 441.7v52.48h47.34l105.87-168.65c11.64 8.8 25.21 15.17 39.95 18.37l-23.7 150.28H294.22L253.25 344.69c8.67-1.52 16.96-4.14 24.74-7.7l37.26 42.27-21.33-51.36c6.89-4.79 13.16-10.4 18.68-16.69l182.53 146.61V348.56L329.43 284.87c4.29-9.72 7.12-20.23 8.2-31.24l84.7-25.93-86.78-7.01c-2.26-9.89-5.95-19.24-10.85-27.82l170.45-87.4V23.92L311.92 175.15c-5.33-5.95-11.34-11.28-17.91-15.86l15.53-38.38-29.97 29.97c-9.61-4.59-20.03-7.74-31-9.15L269.89 19.51h-40.12l1.27 121.48c-19.020.81-36.72 6.82-51.71 16.64L94.1 19.51H54.18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiExplosionRays;
