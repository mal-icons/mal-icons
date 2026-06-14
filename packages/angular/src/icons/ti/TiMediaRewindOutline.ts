import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-media-rewind-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiMediaRewindOutline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 8.68v8.05l-4.13-4.03 4.13-4.03m0.2-2.28c-0.49 0-0.930.2-1.250.51-2.38 2.32-5.95 5.79-5.95 5.79l5.94 5.79c0.330.320.770.51 1.260.510.99 0 1.8-0.8 1.8-1.8v-9c0-0.99-0.81-1.8-1.8-1.8zM19 8.68v8.05l-4.13-4.03 4.13-4.03m0.2-2.28c-0.49 0-0.930.2-1.250.51-2.38 2.32-5.95 5.79-5.95 5.79l5.94 5.79c0.330.320.770.51 1.260.510.99 0 1.8-0.8 1.8-1.8v-9c0-0.99-0.81-1.8-1.8-1.8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiMediaRewindOutline;
