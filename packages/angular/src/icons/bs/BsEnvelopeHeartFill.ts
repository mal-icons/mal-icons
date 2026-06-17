import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-envelope-heart-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEnvelopeHeartFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.05 3.56A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.56l-4.2 2.57-0.05-0.1c-0.67-1.3-2.36-1.92-3.7-1.25-1.34-0.67-3.03-0.05-3.7 1.25l-0.050.11zM11.58 8.91l-0.070.14L16 11.8V4.7l-4 2.45c0.030.56-0.11 1.16-0.41 1.77Zm-4.13 3.05c-1.05-0.69-1.84-1.39-2.4-2.08L0.19 12.86A2 2 0 0 0 2 14h12a2 2 0 0 0 1.81-1.14L10.95 9.88c-0.560.69-1.35 1.39-2.4 2.08L8 12.32l-0.55-0.36ZM4.42 8.91c-0.31-0.6-0.44-1.2-0.41-1.77L0 4.7v7.1l4.49-2.75z"}],["path",{"d":"M8 5.99c1.66-1.71 5.83 1.28 0 5.13-5.82-3.85-1.66-6.84 0-5.13"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEnvelopeHeartFill;
