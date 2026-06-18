import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-loader-3-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiLoader3Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.05 13H5.07C5.56 16.39 8.47 19 12 19C15.53 19 18.44 16.39 18.93 13H20.94C20.45 17.5 16.63 21 12 21C7.37 21 3.55 17.5 3.05 13ZM3.05 11C3.55 6.5 7.37 3 12 3C16.63 3 20.45 6.5 20.94 11H18.93C18.44 7.61 15.53 5 12 5C8.47 5 5.56 7.61 5.07 11H3.05Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiLoader3Fill;
