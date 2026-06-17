import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-border-top",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBorderTop {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 0v1h16V0zm1 2.84v-0.94H0v0.94zm6.5-0.94v0.94h1v-0.94zm7.5 0v0.94h1v-0.94zM1 4.72V3.78H0v0.94h1zm6.5-0.94v0.94h1V3.78h-1zm7.5 0v0.94h1V3.78h-1zM1 6.59v-0.94H0v0.94zm6.5-0.94v0.94h1v-0.94zm7.5 0v0.94h1v-0.94zM0.5 8.5h0.47v-0.03H1V7.53H0.97V7.5H0.5v0.03H0v0.94h0.5zm1.41 0h0.94v-1h-0.94zm1.88 0h0.94v-1H3.78v1zm1.88 0h0.94v-1h-0.94zm2.81 0v-0.03H8.5V7.53h-0.03V7.5H7.53v0.03H7.5v0.94h0.03V8.5zm0.94 0h0.94v-1h-0.94zm1.88 0h0.94v-1h-0.94zm1.88 0h0.94v-1h-0.94zm1.88 0h0.47v-0.03h0.5V7.53h-0.5V7.5h-0.47v0.03H15v0.94h0.03zM0 9.41v0.94h1v-0.94zm7.5 0v0.94h1v-0.94zm8.50.94v-0.94h-1v0.94zm-16 0.94v0.94h1v-0.94zm7.5 0v0.94h1v-0.94zm8.50.94v-0.94h-1v0.94zm-16 0.94v0.94h1v-0.94zm7.5 0v0.94h1v-0.94zm8.50.94v-0.94h-1v0.94zM0 16h0.97v-0.5H1v-0.47H0.97V15H0.5v0.03H0zm1.91 0h0.94v-1h-0.94zm1.88 0h0.94v-1H3.78v1zm1.88 0h0.94v-1h-0.94zm1.88-0.5v0.5h0.94v-0.5H8.5v-0.47h-0.03V15H7.53v0.03H7.5v0.47zm1.880.5h0.94v-1h-0.94zm1.88 0h0.94v-1h-0.94zm1.88 0h0.94v-1h-0.94zm1.88-0.5v0.5H16v-0.97h-0.5V15h-0.47v0.03H15v0.47z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBorderTop;
