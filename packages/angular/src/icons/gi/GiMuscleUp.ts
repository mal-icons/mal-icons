import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-muscle-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiMuscleUp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M165.91 18.69C15.59 59.28-42.19 198.55 92.72 245.38h-1.09c0.640.09 1.270.19 1.910.28 8.99 3.08 18.83 5.73 29.53 7.94C173.36 273.35 209.74 321.22 212.69 368c-33.51 23.1-59.47 62.84-59.47 62.84L179.5 469.53 138.28 493h81.97c-40.42-40.43-11.76-85.91 36.13-85.91 48.54 0 73.94 48.11 36.16 85.91h81.13l-40.37-23.47 26.28-38.69s-26.38-40.4-60.28-63.41c3.2-46.6 39.5-94.17 89.6-113.84 10.71-2.21 20.55-4.86 29.53-7.940.63-0.09 1.27-0.19 1.91-0.28h-1.12c134.93-46.82 77.16-186.09-73.16-226.69-40.72 39.37 6.54 101.68 43.63 56.88 36.9 69.08 8.6 127.59-72.28 83.41-11.88 24.49-34.21 41.37-60.69 41.37-26.7 0-49.17-17.17-60.97-42-81.77 45.38-110.51-13.37-73.44-82.78 37.09 44.81 84.35-17.51 43.63-56.88zm90.79 35.92c-27.39 0-51.33 27.56-51.33 63.61 0 36.06 23.94 63 51.33 63 27.39 0 51.33-26.94 51.33-62.99 0-36.06-23.94-63.61-51.33-63.61z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiMuscleUp;
