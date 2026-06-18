import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-file-close-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFileCloseLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 22V20H5V4H15V8H19V13H21V7L16 2H4C3.45 2 3 2.44 3 2.99V21.01C3 21.54 3.44 22 3.99 22H12ZM21.54 21.12L19.41 19L21.54 16.88L20.12 15.46L18 17.59L15.88 15.46L14.46 16.88L16.59 19L14.46 21.12L15.88 22.54L18 20.41L20.12 22.54L21.54 21.12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFileCloseLine;
