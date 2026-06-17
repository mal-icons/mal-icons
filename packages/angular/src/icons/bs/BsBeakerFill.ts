import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-beaker-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBeakerFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.580.01a0.50.5 0 0 1 0.330.79l-0.050.06-0.120.12A2.5 2.5 0 0 0 15 2.74V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2.74a2.5 2.5 0 0 0-0.57-1.58L0.270.980.150.85A0.50.5 0 0 1 0.5 0h15zM11.5 13a0.50.5 0 1 0 0 1H13v-1zm-2-2a0.50.5 0 0 0 0 1H13v-1zm2-2a0.50.5 0 1 0 0 1H13V9zm-2-2a0.50.5 0 1 0 0 1H13V7zm2-2a0.50.5 0 1 0 0 1H13V5zm-2-2a0.50.5 0 1 0 0 1H13V3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBeakerFill;
