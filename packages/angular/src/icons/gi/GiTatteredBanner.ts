import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-tattered-banner",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiTatteredBanner {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M93.31 19.41c-11.24 0-20.16 8.92-20.16 20.16 0 6.97 3.44 13.02 8.72 16.62L35.22 494.25H54l46.44-435.87c7.64-2.84 13-10.1 13-18.81 0-11.24-8.89-20.16-20.13-20.16zm23.91 52.69l-21.16 198.78 92.62 19.53 64.16-194L117.22 72.09zm137.59 78.28L190.63 344.44l58.28 11.03-3.81-57.87 27.03 29.91 18.59-7.84 11.31 45.88 82.69 15.63-34.03-68.44 29.84-12.66 23.03 32.56 42.50.19 1.88 17.88 39-24.37-35.81-8.53-7.94-29.65-45.78-2.41 3.28-30.84-35.44-19.41 15.03-31.09 28.06-21.34v-0.09l-153.53-32.56zm189.88 9.44l2.13 34.53-51.22 23.31 71.78 4.38 16.22-15.72L462.9 172l-18.22-12.19zm-4.47 84.87l35.13 45.63 18.47-25.62-53.59-20zm-98.47 8.25l24.81 1.41 5.22 23.75-50.15 9.06 20.13-34.22zm-4.03 76.69l11.97 19.22-37.06 2.22 5.09-15.91 20-5.53zm79.87 16.5l-17.53 29.19 39.72 32.72 40.88-11.09-40.28-19.87-22.78-30.94z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiTatteredBanner;
