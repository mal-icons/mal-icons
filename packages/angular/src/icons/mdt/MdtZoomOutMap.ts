import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-zoom-out-map",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtZoomOutMap {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m17.3 5.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM9 3H3v6l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3zm-0.83 11.41L5.3 17.3 3 15v6h6l-2.3-2.3 2.89-2.87zm7.66 0-1.42 1.42 2.89 2.87L15 21h6v-6l-2.3 2.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtZoomOutMap;
