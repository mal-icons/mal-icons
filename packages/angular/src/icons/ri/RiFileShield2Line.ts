import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-file-shield-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFileShield2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 9V4H5V20H11.06C11.38 20.42 11.78 20.78 12.24 21.08L13.63 22H3.99C3.44 22 3 21.56 3 21.01V2.99C3 2.46 3.45 2 4 2H15L21 8V9H14ZM12 11H21V16.95C21 17.94 20.5 18.86 19.66 19.41L16.5 21.5L13.34 19.41C12.5 18.86 12 17.94 12 16.95V11ZM14 16.95C14 17.27 14.16 17.56 14.44 17.74L16.5 19.1L18.56 17.74C18.84 17.56 19 17.27 19 16.95V13H14V16.95Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFileShield2Line;
