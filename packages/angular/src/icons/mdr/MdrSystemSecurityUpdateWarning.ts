import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-system-security-update-warning",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSystemSecurityUpdateWarning {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"16","r":"1"}],["path",{"d":"M12 13c0.55 0 1-0.45 1-1V8c0-0.55-0.45-1-1-1s-1 0.45-1 1v4c0 0.550.45 1 1 1z"}],["path",{"d":"M17 1H7c-1.1 0-1.990.9-1.99 2v18c0 1.10.89 2 1.99 2h10c1.1 0 2-0.9 2-2V3c0-1.1-0.9-2-2-2zm0 17H7V6h10v12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSystemSecurityUpdateWarning;
