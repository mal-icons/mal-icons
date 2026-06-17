import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-envelope-open-heart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEnvelopeOpenHeart {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M8.47 1.32a1 1 0 0 0-0.94 0l-6 3.2A1 1 0 0 0 1 5.4v0.82l3.24 1.94a2.8 2.8 0 0 0-0.23 1.03L1 7.38v5.73l3.48-2.09q0.220.410.560.83l-4 2.4A1 1 0 0 0 2 15h12a1 1 0 0 0 0.97-0.74l-4-2.4q0.33-0.420.56-0.83L15 13.12V7.38l-3 1.8a2.8 2.8 0 0 0-0.23-1.03L15 6.22V5.4a1 1 0 0 0-0.53-0.88zM7.060.44a2 2 0 0 1 1.88 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.06-1.76zM8 7.99c1.66-1.71 5.83 1.28 0 5.13-5.82-3.85-1.66-6.84 0-5.13"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEnvelopeOpenHeart;
