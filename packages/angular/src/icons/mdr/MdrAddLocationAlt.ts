import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-add-location-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAddLocationAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 0c0.55 0 1 0.45 1 1v2h2c0.55 0 1 0.45 1 1s-0.45 1-1 1h-2v2c0 0.55-0.45 1-1 1s-1-0.45-1-1V5h-2c-0.55 0-1-0.45-1-1s0.45-1 1-1h2V1c0-0.550.45-1 1-1zm-7 12c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2 0.9 2 2 2zm2.72-9.53c-0.440.36-0.720.91-0.72 1.53 0 1.10.9 2 2 2h1v1c0 1.10.9 2 2 2 0.32 0 0.62-0.080.89-0.210.070.450.110.920.11 1.41 0 3.18-2.45 6.92-7.34 11.23-0.380.33-0.950.33-1.33 0C6.45 17.12 4 13.38 4 10.2 4 5.22 7.8 2 12 2c0.94 0 1.860.16 2.720.47z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAddLocationAlt;
