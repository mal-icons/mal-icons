import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-evil-comet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiEvilComet {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M121.49 19.12l162.91 176.31c-42.27-65.6-80.67-115.53-100.85-176.31h-62.06zM87 19.12L213.88 174.73 54.73 26.24l269.74 298.49L19.15 40.05v30.2L182.45 225.47 19.15 107.68v31.66l0.310.170 52.22 116.83 30.87-45.58-39.87c15.55 10.18 32.44 21.74 49.54 34.34 31.36 23.11 62.63 49.19 86.09 75.96 23.46 26.78 39.88 54.46 38.12 82.16-3.91 61.67 50.5 112.38 112.98 112.38 30.24 0 57.64-11.83 77.89-31.1l-76.87 14.22 9.44-37.76-68.33 16.18 10.5-46.3-43.38 7.040.36-2.63 26.8-58.23-5.23 38.37 45.8-7.43-9.99 44.09 69.06-16.36-9.84 39.36 69.9-12.92c5.61-9.05 9.97-18.95 12.85-29.48L450.7 402.21l39.68-25.54c0.01-0.690.02-1.370.02-2.06 0-62.47-50.54-106.99-113.85-113.01-27.78-2.64-56.96-20.12-86.38-43.83-29.42-23.7-58.91-54.05-85.29-84.03-47.5-53.97-83.31-104.56-90.33-114.61H87zM383 284.25l14.08 42.25 20.87-18.57 10.31 85.93-24.11-43.12-20.67 13.13-25.26-53.59 18.19 11.89 6.6-37.94z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiEvilComet;
