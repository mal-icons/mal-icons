import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-location-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdLocationOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4c2.76 0 5 2.24 5 5 0 1.06-0.39 2.32-1 3.62l1.49 1.49C18.37 12.36 19 10.57 19 9c0-3.87-3.13-7-7-7-1.84 0-3.50.71-4.75 1.86l1.43 1.43C9.56 4.5 10.72 4 12 4zm0 2.5c-0.59 0-1.130.21-1.560.56l3.5 3.5c0.35-0.430.56-0.970.56-1.56A2.5 2.5 0 0 0 12 6.5zM3.41 2.86 2 4.27l3.18 3.18C5.07 7.95 5 8.47 5 9c0 5.25 7 13 7 13s1.67-1.85 3.38-4.35L18.73 21l1.41-1.41L3.41 2.86zM12 18.88c-2.01-2.58-4.8-6.74-4.98-9.59l6.92 6.92c-0.650.98-1.33 1.89-1.94 2.67z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdLocationOff;
