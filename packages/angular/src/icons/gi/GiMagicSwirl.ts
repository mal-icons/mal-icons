import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-magic-swirl",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiMagicSwirl {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M247.79 18.73C137.97 17.6 19.87 96.94 19.73 244.53l21.4-51.39c-9.48 72.28-7.75 147.24 38.79 202.5L38.2 377.36c39.24 69.77 126.33 90.98 200.86 92.51C124.11 429.9 67.87 342.28 63.91 246.49c-6.72-211.78 260.66-217.69 340.78-75.77-3.42-19.49-8.62-38.43-15.62-56.11 77.41 89.16 59.29 214.88-21.29 253.04-24.25 3.95-48.93 12.06-60.95 19-58.55 33.8-6.27 126.54 53.23 92.19 9.44-5.45 23.4-17.3 36.49-31.35 64.36-59.52 98.1-118.24 93.11-188.94-6.52 29.1-19.17 57.9-35.62 84.68 63.16-146.82 7.96-263.89-144.84-301.35 12.1 5.84 23.5 13.63 33.87 23.36-57.41-23.75-131.12-22.62-186.88 3.51 28.07-26.2 64.78-43.73 102.2-49.64-3.52-0.2-7.05-0.32-10.6-0.36zm-19.74 160.2l-19.84 100.57c-2.96 3.81-5.64 6.85-9.03 9.94l-25.69-49.1-22.7 11.93 31.37 60.95c4.48 11.47 10.02 20.68 15.16 28.52 28.06 42.8 64.55 35.25 95.3 9.56l87.28-48.45-12.71-22.5-66.14 36.94c-1.52-3.15-3.27-6.55-5.06-9.51l67.82-64.96-17.54-18.69-66.47 63.76c-2.36-2.32-4.24-4.53-6.76-6.54l45.08-78.08-22.73-13.13-45.86 78.3c-3.79-1.31-7.72-2.2-11.59-2.74l15.66-81.9-25.53-4.85z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiMagicSwirl;
