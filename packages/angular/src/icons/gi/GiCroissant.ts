import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-croissant",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCroissant {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 99.63c-37.26 0-74.59 11.18-119.84 33.33 1.57 57.32 29.77 114.88 57.94 145.36C211.38 271.18 233.63 268 256 268s44.62 3.18 61.9 10.32c28.18-30.48 56.38-88.04 57.94-145.36C330.59 110.81 293.26 99.63 256 99.63zm-134.42 54.14c-25.18 6.6-40.16 20.58-49.84 40.7-5.6 34.04-0.22 57 10.98 74.92 10.89 17.42 27.93 30.35 47.21 42.34 10.96-1.17 21.32-2.24 30.15-5.56 8.21-3.09 15.32-8.03 21.72-17.27-27.81-30.24-53.7-80.82-60.21-135.11zm268.84 0c-6.51 54.29-32.4 104.88-60.21 135.12 6.39 9.24 13.51 14.18 21.71 17.27 8.84 3.32 19.19 4.4 30.15 5.56 19.28-11.99 36.32-24.91 47.21-42.33 11.2-17.91 16.58-40.87 10.98-74.92-9.68-20.12-24.66-34.09-49.84-40.7zM54.33 234.01C36.35 260.29 24 289.6 24 320c0 21.62 1.85 42.63 6.42 58.71 4.57 16.08 11.55 26.32 20.51 29.85 13.78 4.57 33.9-22.08 45.77-41.32 3.23-6.18 6.99-13.9 10.56-21.39 5.3-11.14 8.71-18.7 10.55-22.79-18.77-11.95-36.5-25.74-48.66-45.19-7.68-12.28-12.92-26.73-14.82-43.85zm403.34 0c-1.9 17.12-7.14 31.57-14.82 43.85-12.16 19.45-29.89 33.24-48.66 45.19 1.84 4.08 5.25 11.64 10.55 22.79 3.56 7.49 7.33 15.21 10.56 21.39 7.4 14.07 26.39 45.02 45.77 41.32 8.96-3.53 15.94-13.77 20.51-29.85C486.15 362.63 488 341.62 488 320c0-30.4-12.35-59.71-30.33-85.99z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCroissant;
