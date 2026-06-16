import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-pending-actions",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtPendingActions {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.65 19.35 16.5 17.2V14h1v2.79l1.85 1.85-0.70.71zM17 10c0.34 0 0.670.03 1 0.08V5h-2v3H8V5H6v15h4.68A7 7 0 0 1 17 10zm-5-5c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z","opacity":".3"}],["path",{"d":"M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85-0.70.71zM18 3h-3.18C14.4 1.84 13.3 1 12 1s-2.40.84-2.82 2H6c-1.1 0-2 0.9-2 2v15c0 1.10.9 2 2 2h6.11a6.74 6.74 0 0 1-1.42-2H6V5h2v3h8V5h2v5.08c0.710.1 1.380.31 2 0.6V5c0-1.1-0.9-2-2-2zm-6 2c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtPendingActions;
