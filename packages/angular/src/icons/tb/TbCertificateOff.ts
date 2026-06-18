import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-certificate-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCertificateOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.88 12.88a3 3 0 0 0 4.24 4.24m0.59 -3.42a3.01 3.01 0 0 0 -1.44 -1.42"}],["path",{"d":"M13 17.5v4.5l2 -1.5l2 1.5v-4.5"}],["path",{"d":"M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 0.9 -2 2 -2m4 0h10a2 2 0 0 1 2 2v10"}],["path",{"d":"M6 9h3m4 0h5"}],["path",{"d":"M6 12h3"}],["path",{"d":"M6 15h2"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCertificateOff;
