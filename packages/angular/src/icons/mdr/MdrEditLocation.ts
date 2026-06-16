import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-edit-location",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrEditLocation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2c-4.2 0-8 3.22-8 8.2 0 3.18 2.45 6.92 7.34 11.230.380.330.950.33 1.33 0C17.55 17.12 20 13.38 20 10.2 20 5.22 16.2 2 12 2zM9.73 13.5H8.5v-1.44l3.93-3.92 1.43 1.43-3.77 3.78c-0.10.1-0.220.15-0.360.15zm5.55-5.34-0.70.7-1.44-1.440.7-0.7a0.380.38 0 0 1 0.54 0l0.90.9c0.150.150.150.39 0 0.54z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrEditLocation;
