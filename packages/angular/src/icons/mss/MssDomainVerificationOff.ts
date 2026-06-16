import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-domain-verification-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDomainVerificationOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M833-41 714-160H80v-640h80v86L26-848l43-43L876-84l-43 43ZM140-220h514L218-656h-78v436Zm725 39-45-45v-430H390L246-800h634v580q0 11-4 21t-11 18ZM586-460l-44-44 64-64 44 44-64 64Zm-43 43L438-312 310-440l44-44 84 84 61-61 44 44Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDomainVerificationOff;
