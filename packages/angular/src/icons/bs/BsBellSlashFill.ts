import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-bell-slash-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBellSlashFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.16 14H15c-1.5-1-2-5.9-2-7q0-0.4-0.06-0.78zm6.29-10.62A5 5 0 0 0 8.99 2.1a1 1 0 1 0-1.99 0A5 5 0 0 0 3 7c0 0.9-0.33 4.34-1.28 6.11zM10 15a2 2 0 1 1-4 0zm-9.370.63a0.530.53 0 0 0 0.750.75l14.75-14.75a0.530.53 0 0 0-0.75-0.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBellSlashFill;
