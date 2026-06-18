import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-file-check-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFileCheckFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 7L16 2H4C3.45 2 3 2.44 3 2.99V21.01C3 21.54 3.44 22 3.99 22H12.34C12.12 21.37 12 20.7 12 20C12 16.69 14.69 14 18 14C19.09 14 20.12 14.29 21 14.8L21 7ZM14.46 19.46L18 23L22.95 18.05L21.54 16.64L18 20.17L15.88 18.05L14.46 19.46Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFileCheckFill;
