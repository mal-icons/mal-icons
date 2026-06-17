import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-skull-crack",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSkullCrack {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M226.06 24.19L222 58.72l32.69 25.63 23.75-50.03c-18.14-9.14-35.27-9.71-52.37-10.13zM166.75 61.09c-24.25 2.93-42.95 15.9-58.87 33.81h0.03l96.41 62.59-37.56-96.41zM300.88 88.75l18.66 85.5-91.09-23.87L269 233.94l-140.59-89.37c-3.97 4.88-7.7 9.97-11.22 15.28-28.79 43.47-42.05 101.1-42.9 156.72 40.12 19.63 63.84 40.14 74.03 61.56 9.16 19.25 5.48 39.06-6.34 54.25 25.21 23.38 68.64 37.63 113.16 38.34 44.810.72 89.97-12.08 118.63-38.78-6.03-6.94-10.41-14.35-12.5-22.44-2.8-10.85-0.95-22.55 5.19-33.28 11.76-20.54 37.65-39.26 80.06-59.69-0.88-52.66-13.85-110.23-42.5-154.4-23.4-36.08-56.55-63.41-103.12-73.37zm-119.28 168.84c27.75 0 50.25 22.5 50.25 50.25s-22.5 50.25-50.25 50.25c-27.75 0-50.25-22.5-50.25-50.25s22.5-50.25 50.25-50.25zm149.47 0c27.75 0 50.25 22.5 50.25 50.25s-22.5 50.25-50.25 50.25-50.25-22.5-50.25-50.25 22.5-50.25 50.25-50.25zm-74.75 86.13c13.74 29.01 24.65 58.02 30.06 87.03-14.78 12.9-41.26 14.77-60.12 0 7.32-29.01 16.12-58.02 30.06-87.03z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSkullCrack;
