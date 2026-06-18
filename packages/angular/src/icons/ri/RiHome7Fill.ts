import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-home-7-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiHome7Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 20C20 20.55 19.55 21 19 21H5C4.45 21 4 20.55 4 20V11L1 11L11.33 1.61C11.71 1.26 12.29 1.26 12.67 1.61L23 11L20 11V20ZM12 15C13.38 15 14.5 13.88 14.5 12.5C14.5 11.12 13.38 10 12 10C10.62 10 9.5 11.12 9.5 12.5C9.5 13.88 10.62 15 12 15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiHome7Fill;
