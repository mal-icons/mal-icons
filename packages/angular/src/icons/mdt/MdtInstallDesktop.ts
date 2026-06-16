import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-install-desktop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtInstallDesktop {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.83 9 16 10.17zM4 17h16v-3.17l-3 3L9.17 9 13 5.17V5H4z","opacity":".3"}],["path",{"d":"M20 17H4V5h9V3H4c-1.11 0-2 0.89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-0.9 2-2v-5.17l-2 2V17z"}],["path",{"d":"M18 10.17V3h-2v7.17l-2.59-2.58L12 9l5 5 5-5-1.41-1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtInstallDesktop;
