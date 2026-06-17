import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-bow-arrow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBowArrow {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M331.73 20.44a4.42 4.42 0 0 0-1.80.33c-27.74 11.54-47.29 57.5-29.9 76.67 33.52 38.95 72.83 55.57 90.15 128.43 2.61 20.15 1.22 40.09 0 60.25-17.31 72.86-56.63 89.49-90.15 128.43-17.4 19.18 2.16 65.13 29.9 76.67 9.04 3.76 28.03-26.16 21.75-25.21-16.34 2.49-37.8-20.94-28.39-28.93 38.47-32.65 105.49-100.05 100.28-135.55-2.21-15.06-9.35-30.36-15.57-45.54 6.23-15.18 13.36-30.48 15.57-45.54 5.21-35.5-61.81-102.9-100.28-135.55-9.41-7.99 12.05-31.42 28.39-28.93 5.880.9-10.44-25.35-19.95-25.53zM152 24.23l-21.44 53.6L152 99.27l21.44-21.44zm-9 91.5v296.55l9-9 9 9V115.73l-2.64 2.64-6.36 6.36zm160 9.85v260.82l18-17.53V143.1zM152 428.73l-23 23v38.55l23-23 23 23v-38.55z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBowArrow;
