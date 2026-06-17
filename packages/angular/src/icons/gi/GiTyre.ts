import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-tyre",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiTyre {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M128.84 16.31c-1.260.01-2.520.04-3.750.09-19.690.81-35.63 6.79-46.62 17.78-21.99 21.99-23.81 63.78-4.72 115.69s58.57 112.16 113.69 167.28c55.12 55.12 115.38 94.6 167.28 113.69 51.91 19.09 93.73 17.27 115.72-4.72 21.99-21.99 23.78-63.78 4.69-115.69-19.09-51.9-58.54-112.19-113.66-167.31C306.35 88.01 246.06 48.56 194.16 29.47c-24.33-8.95-46.42-13.32-65.31-13.16zm34.97 52.16c45.35-0.48 113.94 35.97 175.16 97.19 76.95 76.95 114.75 165.57 89.28 205-16.35-55.69-56.74-120.15-115.44-178.84C254.13 133.13 189.69 92.73 134 76.38c8.06-5.2 18.17-7.78 29.81-7.91zM42.72 70.03L31.78 80.97c-10.99 10.99-16.85 26.35-17.69 46.06-0.83 19.71 3.62 43.48 13.22 69.38C46.51 248.2 86.06 308.37 141.16 363.47c55.1 55.1 115.27 94.65 167.06 113.84 25.9 9.6 49.66 14.05 69.37 13.22 19.71-0.83 35.08-6.7 46.06-17.69l10.97-10.97c-25.29 3.14-55.02-1.97-86.34-13.5-55.3-20.34-117.29-61.23-174.06-118-56.77-56.77-97.66-118.73-118-174.03-11.52-31.3-16.63-61.03-13.5-86.31zm77.22 21.88c52.77 13.2 119.52 52.99 179.66 113.13 60.13 60.14 99.93 126.89 113.13 179.66-41.02 21.15-126.71-16.64-201.41-91.34-74.71-74.72-112.55-160.42-91.37-201.44z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiTyre;
