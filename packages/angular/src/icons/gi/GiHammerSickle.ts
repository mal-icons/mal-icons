import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-hammer-sickle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiHammerSickle {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M257.32 21.44C434.59 160.41 438.15 262.89 384.48 315.87l55.65 55.65c81.85-100.58 74.74-275.93-182.81-350.08zm-37.92 21.66c-16.71 4.85-34.67 7.07-50.61 6.75-13.68-0.27-25.71-1.44-34.94-6.41L21.13 156.16l55.15 55.16L231.95 55.66l-12.55-12.55zm-41.29 91.85l-43.84 43.84L442 486.52c3.01 3.01 6.44 3.52 12.58 1.65 6.15-1.87 13.72-6.73 19.94-12.96 6.22-6.22 11.09-13.8 12.96-19.94 1.87-6.15 1.36-9.58-1.64-12.58L178.11 134.95zm-8.66 179.74l-40.75 37.12 50.81 50.35c59.75 49.81 126.25 53.24 182.03 29.36l-75.27-75.27c-43.74 2.72-88.65-10.46-116.82-41.56zm-58.94 45.87c-5.52 1.07-8.98 2.96-11.31 5.25-1.96 1.92-3.25 4.56-4.25 7.56l55.19 52.84c5.47-1.01 9.26-2.79 11.28-4.69 2-1.87 3.1-3.86 3.1-7.53l-54-53.44zm-24.72 30.31L30.16 441.56c-16.74 27 14.69 61.2 51.09 44.66l51.53-50.28-47-45.06v0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiHammerSickle;
