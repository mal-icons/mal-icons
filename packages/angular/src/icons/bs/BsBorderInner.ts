import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-border-inner",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBorderInner {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.97 0H0v0.97h0.5V1h0.47V0.97H1V0.5H0.97zm0.94 1h0.94V0h-0.94zm1.88 0h0.94V0H3.78v1zm1.88 0h0.94V0h-0.94z"}],["path",{"d":"M8.5 7.5H16v1H8.5V16h-1V8.5H0v-1h7.5V0h1z"}],["path",{"d":"M9.41 1h0.94V0h-0.94zm1.88 0h0.94V0h-0.94zm1.88 0h0.94V0h-0.94zm1.88 0h0.47V0.97h0.5V0h-0.97v0.5H15v0.47h0.03zM1 2.84v-0.94H0v0.94zm14-0.94v0.94h1v-0.94zM1 4.72V3.78H0v0.94h1zm14-0.94v0.94h1V3.78h-1zM1 6.59v-0.94H0v0.94zm14-0.94v0.94h1v-0.94zM0 9.41v0.94h1v-0.94zm16 0.94v-0.94h-1v0.94zm-16 0.94v0.94h1v-0.94zm16 0.94v-0.94h-1v0.94zm-16 0.94v0.94h1v-0.94zm16 0.94v-0.94h-1v0.94zM0 16h0.97v-0.5H1v-0.47H0.97V15H0.5v0.03H0zm1.91 0h0.94v-1h-0.94zm1.88 0h0.94v-1H3.78v1zm1.88 0h0.94v-1h-0.94zm3.75 0h0.94v-1h-0.94zm1.88 0h0.94v-1h-0.94zm1.88 0h0.94v-1h-0.94zm1.88-0.5v0.5H16v-0.97h-0.5V15h-0.47v0.03H15v0.47z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBorderInner;
