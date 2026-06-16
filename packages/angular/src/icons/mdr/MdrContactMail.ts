import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-contact-mail",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrContactMail {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 8V7l-3 2-3-2v1l2.72 1.82a0.50.5 0 0 0 0.55 0L21 8zm1-5H2C0.9 3 0 3.9 0 5v14c0 1.10.9 2 2 2h20c1.1 0 1.99-0.9 1.99-2L24 5c0-1.1-0.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm7.5-6h-7c-0.28 0-0.5-0.22-0.5-0.5v-5c0-0.280.22-0.50.5-0.5h7c0.28 0 0.50.220.50.5v5c0 0.28-0.220.5-0.50.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrContactMail;
