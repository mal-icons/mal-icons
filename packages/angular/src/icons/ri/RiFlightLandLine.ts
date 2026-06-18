import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-flight-land-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFlightLandLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.95 14.89C20.73 15.69 19.91 16.16 19.11 15.95L3.45 11.75C3 11.63 2.7 11.23 2.7 10.77L2.8 5.37L4.24 5.75L5.16 9.1L10.25 10.47L9.88 2.09L11.82 2.61L14.63 11.64L19.89 13.05C20.69 13.27 21.16 14.09 20.95 14.89ZM4 19H20V21H4V19Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFlightLandLine;
