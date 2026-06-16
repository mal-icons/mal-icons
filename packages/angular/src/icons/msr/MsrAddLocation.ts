import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-add-location",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAddLocation {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M450-530v90q0 12.75 8.68 21.38 8.68 8.63 21.5 8.63 12.83 0 21.33-8.62T510-440v-90h90q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T600-590h-90v-90q0-12.75-8.68-21.37-8.68-8.62-21.5-8.62-12.82 0-21.32 8.63T450-680v90h-90q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T360-530h90Zm30 371q133-121 196.5-219.5T740-552q0-117.79-75.29-192.89Q589.42-820 480-820t-184.71 75.11Q220-669.79 220-552q0 75 65 173.5T480-159Zm-0.25 59q-10.75 0-21.25-3.5T440-115q-42-38-91-87.5T258-309q-42-57-70-119t-28-124q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 62-28 124t-70 119q-42 57-91 106.5T520-115q-8 8-18.75 11.5t-21.5 3.5Zm0.25-460Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAddLocation;
