import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-beaker",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBeaker {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.5 3a0.50.5 0 0 0 0 1H13V3zm2 2a0.50.5 0 0 0 0 1H13V5zm-2 2a0.50.5 0 0 0 0 1H13V7zm2 2a0.50.5 0 0 0 0 1H13V9zm-2 2a0.50.5 0 0 0 0 1H13v-1zm2 2a0.50.5 0 0 0 0 1H13v-1z"}],["path",{"d":"M0.5 0a0.50.5 0 0 0-0.350.85l0.120.12A2.5 2.5 0 0 1 1 2.74V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2.74a2.5 2.5 0 0 1 0.73-1.77l0.12-0.12A0.50.5 0 0 0 15.5 0zM2 2.74A3.5 3.5 0 0 0 1.54 1h12.93A3.5 3.5 0 0 0 14 2.74V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBeaker;
