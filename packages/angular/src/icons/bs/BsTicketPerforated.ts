import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-ticket-perforated",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsTicketPerforated {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 4.85v0.9h1v-0.9zm7 0v0.9h1v-0.9zm-7 1.8v0.9h1v-0.9zm7 0v0.9h1v-0.9zm-7 1.8v0.9h1v-0.9zm7 0v0.9h1v-0.9zm-7 1.8v0.9h1v-0.9zm7 0v0.9h1v-0.9z"}],["path",{"d":"M1.5 3A1.5 1.5 0 0 0 0 4.5V6a0.50.5 0 0 0 0.50.5 1.5 1.5 0 1 1 0 3 0.50.5 0 0 0-0.50.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a0.50.5 0 0 0-0.5-0.5 1.5 1.5 0 0 1 0-3A0.50.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3zM1 4.5a0.50.5 0 0 1 0.5-0.5h13a0.50.5 0 0 1 0.50.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a0.50.5 0 0 1-0.50.5h-13a0.50.5 0 0 1-0.5-0.5v-1.05a2.5 2.5 0 0 0 0-4.9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsTicketPerforated;
