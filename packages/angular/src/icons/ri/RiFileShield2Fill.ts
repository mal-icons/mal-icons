import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-file-shield-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFileShield2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 10H11V17.38C11 18.94 11.78 20.41 13.07 21.27L14.16 22H3.99C3.44 22 3 21.56 3 21.01V2.99C3 2.46 3.45 2 4 2H16L21 7V10ZM13 12H21V17.38C21 18.28 20.55 19.12 19.81 19.61L17 21.5L14.19 19.61C13.45 19.12 13 18.28 13 17.38V12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFileShield2Fill;
