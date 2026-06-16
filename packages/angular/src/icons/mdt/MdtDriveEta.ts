import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-drive-eta",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtDriveEta {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m5.12 11-0.120.34V16h14v-4.66l-0.12-0.34H5.12zm2.38 4c-0.83 0-1.5-0.67-1.5-1.5S6.67 12 7.5 12s1.50.67 1.5 1.5S8.33 15 7.5 15zm9 0c-0.83 0-1.5-0.67-1.5-1.5s0.67-1.5 1.5-1.5 1.50.67 1.5 1.5-0.67 1.5-1.5 1.5z","opacity":".3"}],["path",{"d":"M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-0.66 0-1.210.42-1.42 1.01L3 11v8c0 0.550.45 1 1 1h1c0.55 0 1-0.45 1-1v-1h12v1c0 0.550.45 1 1 1h1c0.55 0 1-0.45 1-1v-8l-2.08-5.99zM6.85 6h10.29l1.04 3H5.81l1.04-3zM19 16H5v-4.66l0.12-0.34h13.77l0.110.34V16z"}],["circle",{"cx":"7.5","cy":"13.5","r":"1.5"}],["circle",{"cx":"16.5","cy":"13.5","r":"1.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtDriveEta;
