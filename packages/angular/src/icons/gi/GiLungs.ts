import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-lungs",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiLungs {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M255.88 29.41A9 9 0 0 0 247 38.53v118.31l-15.19 18.97C232.6 181.42 233 186.87 233 192v11.16l23-28.75 23 28.75V192c0-5.130.4-10.58 1.19-16.19L265 156.85V38.53a9 9 0 0 0-9.12-9.12zM176 121c-4.2 0-14.86 3.97-26.69 12.06-11.83 8.09-25.28 19.81-38.12 33.47-25.69 27.31-48.76 62.73-54.34 91.19-7.46 38.02-11.43 81.63-11.53 119.34-0.1 37.72 4.43 70.27 10.75 82.910.460.91 2 2.49 6.47 3.72 4.47 1.23 11.21 1.78 19.19 1.31 15.95-0.92 36.81-5.69 57.06-13.41 20.26-7.72 40-18.39 54.13-30.44C207.03 409.11 215 396.25 215 384V192c0-13.92-4.04-33.06-11.37-47.62C196.29 129.81 186.83 121 176 121zm160 0c-10.83 0-20.29 8.81-27.62 23.38C301.04 158.94 297 178.08 297 192v192c0 12.25 7.97 25.11 22.09 37.16 14.13 12.04 33.87 22.72 54.13 30.44 20.26 7.72 41.11 12.48 57.06 13.41 7.980.46 14.72-0.08 19.19-1.31 4.47-1.23 6.01-2.8 6.47-3.72 6.32-12.64 10.85-45.19 10.75-82.91-0.1-37.72-4.07-81.32-11.53-119.34-5.59-28.46-28.66-63.88-54.34-91.19-12.84-13.65-26.3-25.37-38.12-33.47C350.86 124.97 340.2 121 336 121z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiLungs;
