import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-double-shot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiDoubleShot {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M414.83 18.08c-29.380.15-59.01 16.6-73.16 58.87-18.76 56.03 67.41 137.78 33.57 221.21l48.22 41.87c35.65-92.95-52.05-200.4-34.2-251.44 12.36-35.35 35.67-38.21 56.05-26.44 19.94 11.51 30.41 30.66 17.97 54.99 33.04-12.62 37.26-51.44 9.52-77.2-3.96-3.68-9.02-7.02-14.28-10.05-12.98-7.5-28.3-11.89-43.69-11.81zm-80.77 32.01L65.94 62.16l-12.52 268.25c6.35-3.42 12.76-6.36 19.13-8.96L83.81 80.06l240.33-10.82c2.91-6.82 6.27-13.18 9.92-19.15zM104.69 87.96l324.39 330.04c-4.34 4.47-8.88 8.73-13.62 12.8L91.13 100.83l-0.270.27L389.03 450.41c-14.87 9.56-31 17.84-48.12 25.12l116.04 19.41-7.02-44.19 44.19 7.02L474.71 341.73c-5.74 17.77-13.42 33.6-22.75 47.8L104.69 87.96zm-6.61 248.54c-0.86-0.01-1.72-0.01-2.570.02-5.580.14-10.950.99-16.11 2.71-64.41 21.56-68.87 79.08-47.06 116.85 24.26 42.03 72.82 42.52 87.24 4.76-24.33 12.43-43.47 1.96-54.99-17.98-11.76-20.38-8.91-43.69 26.44-56.04 50.18-17.55 154.96 66.77 248.37 34.24l-40.76-47.75c-73.32 27.47-146.27-36.11-200.56-36.8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiDoubleShot;
