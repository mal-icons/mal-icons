import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-bleeding-eye",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBleedingEye {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M246.34 28.94c-89.18-0.04-175 44.27-222.66 133 21.24 38.83 45.08 64.08 54.37 100v49.97C73.3 322.04 66 329.11 66 340.31c0 9.09 11.63 18.09 21.03 18.09 9.2 0 21.6-9.68 21.6-19.25 0-11.37-7.31-17.81-11.87-27.03v-32.28c16-32.16 81.36-9.4 105.84 45.63v80.59c-6.36 10.48-13.62 16.95-13.62 28.88 0 17.89 11.76 24.5 23.94 24.5 11.91 0 21.59-5.66 21.59-24.5 0-9.3-7.44-16.63-13.22-31.06V325.72c15.68-36.47 54.92-20.14 71.66 31.25v74.84c-5.41 10.5-11.72 19.46-11.72 32.31 0 12.93 10.05 22.19 21.03 22.19 10.74 0 22.19-9.73 22.19-23.34 0-14.45-7.1-23.41-12.81-34.56v-84.56h-0.22c15.34-65.98 52.29-101.43 68.75-52.59v59.78c-4.46 8.96-9.56 17.38-9.56 29.6 0 13.94 9.55 23.94 18.69 23.94 9.34 0 18.1-9.54 18.1-22.78 0-10.83-4.35-19.01-8.53-27.56V284.31c19.99-69.84 66.45-87.32 90.31-122.37-61.08-88.58-153.63-132.96-242.81-133zm0.44 22c81.74-0.61 166.08 37.78 216.13 115.91-149.81 108.41-280.24 108.6-412.97-4.94 40.83-73.15 117.62-110.38 196.84-110.97zm4.69 16.03c-44.97 0-81.41 36.47-81.41 81.44s36.44 81.41 81.41 81.41c44.97 0 81.44-36.43 81.44-81.41 0-44.97-36.47-81.44-81.44-81.44zm-0.53 49.06c16.13 0 29.19 13.06 29.19 29.19 0 16.13-13.06 29.22-29.19 29.22-16.13 0-29.22-13.09-29.22-29.22s13.09-29.19 29.22-29.19z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBleedingEye;
