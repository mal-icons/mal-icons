import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-envelope-arrow-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEnvelopeArrowUp {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a0.50.5 0 0 1-1 0V5.38l-7 4.2-1.33-0.79-5.64 3.47A1 1 0 0 0 2 13h5.5a0.50.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.11 4.71-2.9L1 5.38zM1 4v0.22l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"}],["path",{"d":"M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m0.35-5.35 1.25 1.25a0.50.5 0 0 1-0.710.71L13 12.21V14a0.50.5 0 0 1-1 0v-1.72l-0.280.31a0.50.5 0 0 1-0.74-0.68l1.15-1.25a0.50.5 0 0 1 0.72-0.02"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEnvelopeArrowUp;
