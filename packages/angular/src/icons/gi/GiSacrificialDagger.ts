import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-sacrificial-dagger",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSacrificialDagger {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M51.44 20.34c-0.530.01-1.070.03-1.590.06-8.440.54-16.71 4.27-22.69 11.06-11.96 13.59-10.62 34.6 2.97 46.56 10.51 9.26 25.48 10.56 37.25 4.38 25.11 37.36 71.58 79.42 109.75 98.66l-54.76 62.22-75.75-35.29 60.19 52.97-0.110.13 15 13.19L261.51 115.42l0.020.03 19.35-21.99-74.84-65.87 44.36 70.22-58.05 65.97c-22.82-35.32-69.26-77.59-109.69-98.62C87.44 52.64 84.31 37.82 73.72 28.5c-6.37-5.61-14.35-8.29-22.28-8.16zm0.97 18.56c3.180.11 6.34 1.31 8.97 3.63 6.01 5.29 6.57 14.18 1.28 20.19C57.37 68.73 48.51 69.29 42.5 64c-6.01-5.29-6.6-14.18-1.31-20.19 2.65-3 6.21-4.64 9.84-4.870.46-0.030.92-0.05 1.38-0.03zM243.78 163.81L190.38 224.5l303.28 266.94c6.09-69.34-117.5-205.14-172.19-258.31-13.02 11.28-32.71 11.51-46-0.19-13.48-11.86-15.64-31.82-5.63-46.22l-26.06-22.91z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSacrificialDagger;
