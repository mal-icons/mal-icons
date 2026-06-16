import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-add-location-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtAddLocationAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-opacity":".3","d":"M14 4.8V7h3v3h1.41c0.060.390.090.790.09 1.2 0 2.57-2.1 5.79-6.16 9.51l-0.340.3-0.34-0.31C7.6 16.99 5.5 13.77 5.5 11.2c0-3.84 2.82-6.7 6.5-6.70.7 0 1.370.1 2 0.3z"}],["path",{"d":"M20 1v3h3v2h-3v3h-2V6h-3V4h3V1h2zm-8 12c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zm2-9.75v2.08c-0.62-0.22-1.3-0.33-2-0.33-3.35 0-6 2.57-6 6.2 0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.79 6-9.14 0-0.41-0.03-0.81-0.1-1.2h2.02c0.050.390.080.790.08 1.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 6.22 7.8 3 12 3c0.68 0 1.350.08 2 0.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtAddLocationAlt;
