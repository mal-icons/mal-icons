import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-trench-body-armor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiTrenchBodyArmor {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M255.18 418.78c9.88 0 48.38-0.13 77.19-1.95a76.82 76.82 0 0 1-152.870.09c26.75 1.69 62.16 1.86 75.68 1.86zm119.17-76.69c-17.53 4.91-68.53 7.36-119.2 7.36-50.67 0-101.06-2.45-117.5-7.36-5.5-1.64-12.37-4.24-11.51-10.05l6.05-41.63a42.83 42.83 0 0 0 17.7 6.13c28.32 3.28 102.88 3.81 106.05 3.81h0.13c3.17 0 77.73-0.54 106.05-3.8a42.83 42.83 0 0 0 17.7-6.12l6.05 41.63c0.85 5.82-5.98 8.53-11.51 10.07zM168.12 319.64a10.26 10.26 0 1 0-10.26 10.25 10.26 10.26 0 0 0 10.29-10.24zm192.32 0a10.26 10.26 0 1 0-10.26 10.25 10.26 10.26 0 0 0 10.29-10.24zm-0.24-39.67c-27.73 3.21-104.21 3.53-104.21 3.53s-76.47-0.31-104.2-3.53c-12.68-1.46-22.69-11.41-22.32-24.53 0 0 9-90.38 9.63-128.430.39-24.06-21.28-53.84 9.53-65.58l48.02-19.82V26s21.81 14.02 59.81 14.02c38 0 59.81-14.02 59.81-14.02v15.6l47.55 19.83c30.81 11.75 8.79 41.53 9.18 65.580.63 38.05 9.58 128.43 9.58 128.430.41 13.11-9.66 23.06-22.35 24.52zM168.15 85.86a10.26 10.26 0 1 0-10.26 10.26 10.26 10.26 0 0 0 10.26-10.26zm192.32 0a10.26 10.26 0 1 0-10.26 10.26 10.26 10.26 0 0 0 10.26-10.26zm-4.21 311.79c-13.29 3.09-57.32 4.66-101.06 4.66-43.73 0-87.24-1.5-99.44-4.6-7.48-1.9-12.18-5.21-11.59-11.17l2.41-25.78c31.89 4.81 89.46 5.23 108.57 5.23 38.28 0 83.92-1.45 110.28-5.33l2.38 25.89c0.61 5.95-4.05 9.35-11.56 11.1zm-182.95-18.56a10.26 10.26 0 1 0-10.26 10.26 10.26 10.26 0 0 0 10.26-10.27zm182 0a10.26 10.26 0 1 0-10.26 10.26 10.26 10.26 0 0 0 10.26-10.27z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiTrenchBodyArmor;
