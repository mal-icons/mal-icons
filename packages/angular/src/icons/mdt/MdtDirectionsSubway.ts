import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-directions-subway",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtDirectionsSubway {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4c-3.51 0-4.960.48-5.57 1h11.23c-0.54-0.54-1.95-1-5.66-1zM6 15.5c0 0.830.67 1.5 1.5 1.5h9c0.83 0 1.5-0.67 1.5-1.5V12H6v3.5zm9.5-2.5c0.83 0 1.50.67 1.5 1.5s-0.67 1.5-1.5 1.5-1.5-0.67-1.5-1.50.67-1.5 1.5-1.5zm-7 0c0.83 0 1.50.67 1.5 1.5S9.33 16 8.5 16 7 15.33 7 14.5 7.67 13 8.5 13z","opacity":".3"}],["path",{"d":"M12 2c-4 0-8 0.5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v0.5h12v-0.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zm0 2c3.71 0 5.120.46 5.66 1H6.43c0.61-0.52 2.06-1 5.57-1zM6 7h5v3H6V7zm12 8.5c0 0.83-0.67 1.5-1.5 1.5h-9c-0.83 0-1.5-0.67-1.5-1.5V12h12v3.5zm0-5.5h-5V7h5v3z"}],["circle",{"cx":"8.5","cy":"14.5","r":"1.5"}],["circle",{"cx":"15.5","cy":"14.5","r":"1.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtDirectionsSubway;
