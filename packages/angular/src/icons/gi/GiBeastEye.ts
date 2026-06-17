import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-beast-eye",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBeastEye {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M230.84 47.69c-28.210.08-58.57 2.93-91 8.78C339.67 41.87 441.95 144.5 495.94 292.75c0-143.32-92.67-245.57-265.09-245.06zm-2.66 33.62c-56.7 22.37-97.41 81.19-97.41 150.84 0 49.01 20.15 92.64 51.85 122 22.64 8.59 46.56 10.9 71.41 9.56-26.21-96.1-8.52-185.37 32.5-271-18.53-6.51-37.96-10.38-58.34-11.41zm-41.84 1.78c-43.32 5.69-90.65 23.3-142.5 54.53 24.99 97.1 56.55 155.04 92.78 187.97-15.56-27.26-24.53-59.27-24.53-93.44 0-61.93 29.42-116.84 74.25-149.06zm134.16 25c1.55 6.27 2.92 12.55 4.16 18.84-1.78-0.35-3.62-0.53-5.5-0.53-15.49 0-28.03 12.55-28.03 28.03 0 15.48 12.54 28.03 28.03 28.03 4.33 0 8.43-0.97 12.09-2.72 3.26 62.23-9.63 123.82-41.03 179.84 32.6-5.38 66.42-14.65 100.78-22.41 22.46-28.08 36.09-64.73 36.09-105.03 0-8.02-0.55-15.9-1.59-23.59-31.27-44.42-66.02-78.69-105-100.47zm-301.87 48.47C36.78 459.96 249.36 479.84 493.06 343.72 306.58 348.13 115.88 532.29 18.63 156.56zm427 82.75c-1.25 33.99-11.34 65.63-27.94 92.28 23.99-4.59 48.14-7.79 72.22-7.81-13.92-30.58-28.64-58.85-44.28-84.47zm41.53 129.81c-127.06 79.08-267.34 111.63-421.03 39.13 130.25 115.86 342.11 82.37 421.03-39.12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBeastEye;
