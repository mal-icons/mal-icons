import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-cookie",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtCookie {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.07 8.93c-2.55-0.39-4.57-2.41-4.99-4.94C6.73 3.82 4 8.69 4 12c0 4.41 3.59 8 8 8 4.06 0 7.7-3.14 7.98-7.45a5.03 5.03 0 0 1-2.91-3.62zM8.5 15c-0.83 0-1.5-0.67-1.5-1.5S7.67 12 8.5 12s1.50.67 1.5 1.5S9.33 15 8.5 15zm2-5C9.67 10 9 9.33 9 8.5S9.67 7 10.5 7s1.50.67 1.5 1.5-0.67 1.5-1.5 1.5zm4.5 6c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z","opacity":".3"}],["circle",{"cx":"10.5","cy":"8.5","r":"1.5"}],["circle",{"cx":"8.5","cy":"13.5","r":"1.5"}],["circle",{"cx":"15","cy":"15","r":"1"}],["path",{"d":"M21.95 10.99c-1.79-0.03-3.7-1.95-2.68-4.22-2.97 1-5.78-1.59-5.19-4.56C7.10.74 2 6.41 2 12c0 5.52 4.48 10 10 10 5.89 0 10.54-5.08 9.95-11.01zM12 20c-4.41 0-8-3.59-8-8 0-3.31 2.73-8.18 8.08-8.020.42 2.54 2.44 4.56 4.99 4.940.070.360.52 2.55 2.92 3.63C19.7 16.86 16.06 20 12 20z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtCookie;
