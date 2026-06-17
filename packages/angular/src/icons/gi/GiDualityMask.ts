import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-duality-mask",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiDualityMask {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M65.44 18.39l-2.33 9.72C53.95 66.38 49.07 107.88 49.07 151.29c0 93.42 23.1 178.09 61.05 240.01 17.22 28.1 37.65 51.6 60.45 68.92 26.69 21.26 56.35 32.96 87.38 32.960.36 0 1.15-0.12 1.93-0.250.620.01 1.250.02 1.870.02 60.13 0 113.67-39.72 151.62-101.65 37.95-61.93 61.05-146.6 61.05-240.01 0-41.56-4.86-81.2-13.26-118.01l-2.32-10.19-9.58 4.18c-50.92 22.2-113.98 35.71-182.09 35.71-2.01-0.02-4.01-0.06-6-0.1V62.8c-1.3 0-2.59-0.02-3.88-0.03-69.78-2.05-125.49-18.08-182.54-40.7l-9.29-3.68zm380.82 28.75c6.79 32.77 10.82 67.65 10.82 104.16 0 90.55-22.6 172.38-58.49 230.96-35.9 58.58-84.36 93.38-136.85 93.38-0.19 0-0.39-0.01-0.58-0.01v-63.99c-2.640.02-5.28-0.03-7.91-0.16-55.36-2.77-109.32-38.91-122.03-99.74l-2.35-11.26h94.9l37.4 14.21V80.21c1.950.04 3.90.08 5.860.1h0.09c66.17 0 127.67-12.38 179.15-33.17zm-279.53 98.12c35.37 0 64.04 13.25 64.04 29.59 0 16.34-28.67 29.59-64.03 29.59-35.36 0-64.04-13.25-64.04-29.59 0-16.34 28.67-29.59 64.04-29.59zm186.28 0c-35.37 0-64.03 13.25-64.03 29.59 0 16.34 28.67 29.59 64.04 29.59 35.37 0 64.04-13.25 64.04-29.59 0-16.34-28.67-29.59-64.03-29.59zM152.57 319.17c14.72 45.05 57.25 71.43 101.6 73.65 44.8 2.24 90.24-19.45 110.42-73.65h-57.45l-44.2 16.19-42.62-16.19h-67.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiDualityMask;
