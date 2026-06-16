import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-rear-camera",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrRearCamera {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m251-355 104-104q9-9 9-21t-9-21L251-605q-9-9-21-9t-21 9q-9 9-9 21t9 21l53 53H110q-12.75 0-21.37 8.68Q80-492.65 80-479.82 80-467 88.63-458.5T110-450h152l-53 53q-9 9-9 21t9 21q9 9 21 9t21-9Zm414.18-295q12.83 0 21.33-8.68 8.5-8.68 8.5-21.5 0-12.82-8.68-21.32-8.68-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.68-8.5 21.5 0 12.83 8.68 21.33 8.68 8.5 21.5 8.5ZM510-180h310v-600H510v600Zm-370 60q-24 0-42-18t-18-42v-210h60v210h310v-600H140v210H80v-210q0-24 18-42t42-18h680q24 0 42 18t18 42v600q0 24-18 42t-42 18H140Zm310-660v600-600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrRearCamera;
