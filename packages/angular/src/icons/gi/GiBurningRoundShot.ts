import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-burning-round-shot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBurningRoundShot {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M51 24.66c-66.5 105.06 49.65 121.76 116.97 130.56 84.4 11.03 37.33 166.2-71.81 84.410.05 58.05 58.4 82.57 95.06 94.63 40.88 13.43-3.76 79.18-83.25 61.22 327.93 246.8 476.23-18.28 340.91-223-22.38-33.86-73.92-67.47-126.72-63.47 126.32 83.08-47.53 116.24-80.44-6.56-20.76-77.47-143.59 17.79-190.72-77.78zm309.19 218.47l24.97 47.12-20.91 42.47-82.5-58.63c20.54-19.19 48.12-30.94 78.44-30.97zm22.25 2.15c52.99 10.32 93 56.96 93 112.97 0 4-0.2 7.95-0.59 11.84l-50.94 28.25 12.25-46.50.94-3.53-1.72-3.22-52.94-99.81zM269.13 288l35.75 25.41-59.37 53.28c-0.2-2.78-0.31-5.6-0.31-8.44 0-26.46 8.94-50.81 23.94-70.25zm126.81 22.63l21.22 40-15.87 60.25-18.65 10.34L350 403.94l45.94-93.31zm-75.47 13.88l35.41 25.19-22.41 45.5-14.94-7.91-8.44-4.5-4.28 8.56-25.06 50.13c-14.92-14.27-26-32.49-31.56-53l71.28-63.97zm149.19 69.84c-15.14 45.91-58.36 79.03-109.34 79.03-26.29 0-50.49-8.83-69.87-23.65l5.66 2.84 22.16-44.28 60.09 31.84 4.47 2.38 4.44-2.47 82.41-45.69z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBurningRoundShot;
