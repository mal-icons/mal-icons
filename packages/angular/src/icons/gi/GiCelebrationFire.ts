import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-celebration-fire",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCelebrationFire {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M290.72 13.4c-79.94 38.87 9.01 152.85-74.4 191.57 21.95-43.35 30.93-118.45-39.69-169.34v0c57.41 92.15-39.58 101.07 10.68 235.040.88 2.1 1.72 4.22 2.47 6.38-0.86-2.16-1.68-4.29-2.47-6.38-17.06-40.42-58.36-69.44-47.87-146.56-92.4 139.14 61.73 179.23 39.97 296.23-20.22-52.32-96.07-38.08-65.88-94.58-81.62 64.48 68 99.77-25.28 168.19h349.01c-44.89-35.72-38.73-108.49-9.29-92.71-14.63-42.75-54.51-10.38-56.48 22.6-15.55-101.87 86.23-108.78 74.39-226.2-19.39 67.79-73.37 65.52-92.71 55.32 68.96-32.6 91.82-125.04 17.15-161.25 23.03 28.64 15.79 123.76-33.24 85-18.19-14.38-70.18-60.23-46.34-163.31zm-165.66 4.78c-6.350.16-12.97 2.23-19.62 6.58 38.01 7.34 57.7 61.68 52.89 122.08 34.38-59.22 5.54-129.64-33.27-128.66zm218.29 44.63c8.51 47.44-17.1 75.03-38.82 30.52 22.31 83.01 95.77 93.25 38.82-30.52zm103.84 93.88c35.62 36.45 25.29 104.74-14.13 160.06 81.14-36.52 81.26-153.81 14.13-160.06zm-379.22 78.92c19.55 54.61-90.04 56.08 5.62 157.77-38.95-68.59 67.41-69.42-5.62-157.77z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCelebrationFire;
