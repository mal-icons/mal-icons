import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-reticule",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiReticule {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M265.22 19.69v57.75c91.03 4.56 164.14 77.69 168.72 168.72h57.75c-4.63-123.12-103.34-221.85-226.47-226.47zm-18.690.03C123.67 24.65 24.72 123.24 20.06 246.16H78.44C83 155.33 155.79 82.33 246.53 77.47V19.72zm9.69 107.22c-32.23 0-61.77 11.79-84.41 31.31l22.47 22.47c12.31-10.25 27.2-17.49 43.56-20.63l18.78 70.53 18.75-70.37c15.89 3.18 30.37 10.23 42.41 20.16l22.35-22.34c-22.46-19.41-51.78-31.12-83.91-31.12zm97.12 44.34L331 193.63c10 12.14 17.07 26.77 20.22 42.81l-70.09 18.69 70.13 18.66c-3.15 16.25-10.31 31.11-20.44 43.44l22.34 22.34c19.51-22.64 31.31-52.15 31.31-84.37 0-32.12-11.72-61.44-31.13-83.91zm-194.750.16c-19.48 22.45-31.28 51.7-31.28 83.75 0 32.15 11.89 61.6 31.47 84.22l22.53-22.53c-9.93-12.2-16.96-26.87-20.09-42.87l70.94-18.87-70.91-18.91c3.14-15.81 10.1-30.23 19.91-42.25l-22.56-22.53zm-138.5 93.41C25.04 387.51 123.87 486.33 246.53 491.28V432.94c-90.54-4.85-163.21-77.55-168.06-168.09H20.09zm413.81 0C429.04 355.6 356.06 428.42 265.22 432.97v58.34c122.92-4.64 221.51-103.6 226.44-226.47h-57.75zm-177.28 14.75l-18.97 71.28c-16.21-3.19-30.99-10.45-43.22-20.69L172 352.63c22.62 19.58 52.07 31.47 84.22 31.47 32.05 0 61.3-11.8 83.75-31.28l-22.34-22.34c-11.95 9.91-26.3 16.98-42.03 20.22l-18.97-71.09z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiReticule;
