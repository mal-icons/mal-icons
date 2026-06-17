import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-sign-no-left-turn-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSignNoLeftTurnFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 13.29A8 8 0 0 1 13.29 2L9.2 6.1A2.5 2.5 0 0 0 8.5 6H7V4.53a0.250.25 0 0 0-0.41-0.19L4.23 6.31a0.250.25 0 0 0 0 0.38l2.36 1.970.030.02zm0.710.71A8 8 0 0 0 14 2.71l-3.88 3.88C10.66 7.05 11 7.74 11 8.5V11h-1V8.5c0-0.49-0.23-0.92-0.6-1.2l-6.7 6.7Z"}],["path",{"d":"M8.29 7 7 8.29V7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSignNoLeftTurnFill;
