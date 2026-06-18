import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-password-fingerprint",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPasswordFingerprint {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 8c0.79 1 1 2 1 3v1"}],["path",{"d":"M9 11c0 -1.58 1.34 -3 3 -3s3 1.42 3 3v2"}],["path",{"d":"M12 11v2"}],["path",{"d":"M6 12v-1.4c-0.01 -2 1.14 -3.85 2.99 -4.85a6.39 6.39 0 0 1 6.01 0"}],["path",{"d":"M12 17v4"}],["path",{"d":"M10 20l4 -2"}],["path",{"d":"M10 18l4 2"}],["path",{"d":"M5 17v4"}],["path",{"d":"M3 20l4 -2"}],["path",{"d":"M3 18l4 2"}],["path",{"d":"M19 17v4"}],["path",{"d":"M17 20l4 -2"}],["path",{"d":"M17 18l4 2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPasswordFingerprint;
