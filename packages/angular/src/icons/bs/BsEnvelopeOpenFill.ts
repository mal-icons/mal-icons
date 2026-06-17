import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-envelope-open-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEnvelopeOpenFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.940.44a2 2 0 0 0-1.88 0l-6 3.2A2 2 0 0 0 0 5.4v0.31l6.71 3.93L8 8.93l1.290.72L16 5.71V5.4a2 2 0 0 0-1.06-1.76zM16 6.87l-5.69 3.34L16 13.37v-6.5Zm-0.06 7.61L8 10.070.06 14.48A2 2 0 0 0 2 16h12a2 2 0 0 0 1.94-1.52M0 13.37l5.69-3.16L0 6.87z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEnvelopeOpenFill;
