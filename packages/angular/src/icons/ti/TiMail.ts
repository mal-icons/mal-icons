import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-mail",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiMail {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 7h-14c-1.1 0-2 0.9-2 2v9c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2v-9c0-1.1-0.9-2-2-2zm-9.68 7.32l1.6 1.4c0.310.270.690.4 1.080.4s0.78-0.13 1.08-0.4l1.6-1.4-0.040.04 3.65 3.65h-12.59l3.65-3.65-0.04-0.04zm-4.32 2.98v-6.75l3.6 3.15-3.6 3.6zm10.4-3.6l3.6-3.15v6.75l-3.6-3.6zm3.6-4.69v0.21l-6.58 5.75c-0.230.2-0.620.2-0.85 0l-6.58-5.75v-0.21h14z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiMail;
