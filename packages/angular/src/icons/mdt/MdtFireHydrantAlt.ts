import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-fire-hydrant-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtFireHydrantAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4c-1.47 0-2.750.81-3.44 2h6.89c-0.7-1.19-1.98-2-3.45-2z","opacity":".3"}],["circle",{"cx":"12","cy":"14","r":"1.5","opacity":".3"}],["path",{"d":"M16 8H8v5H5v2h3v5h8v-5h3v-2h-3V8zm-4 9.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z","opacity":".3"}],["path",{"d":"M12 10.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-0.83 0-1.5-0.67-1.5-1.5s0.67-1.5 1.5-1.5 1.50.67 1.5 1.5-0.67 1.5-1.5 1.5z"}],["path",{"d":"M19 11h-1V8h2V6h-2.35a5.99 5.99 0 0 0-11.3 0H4v2h2v3H5c-1.1 0-2 0.9-2 2v2c0 1.10.9 2 2 2h1v3H4v2h16v-2h-2v-3h1c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2zm-7-7c1.47 0 2.750.81 3.44 2H8.56c0.69-1.19 1.97-2 3.44-2zm7 11h-3v5H8v-5H5v-2h3V8h8v5h3v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtFireHydrantAlt;
