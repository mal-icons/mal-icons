import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-facepunch",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFacepunch {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.39 0 0 5.39 0 12s5.39 12 12 12 12-5.39 12-12S18.63 0 12 0zm0 21.31c-5.13 0-9.3-4.16-9.3-9.3S6.87 2.72 12 2.72s9.3 4.16 9.3 9.3-4.16 9.3-9.3 9.3zM10.03 12l1.48 1.48-1.92 1.92-1.48-1.48-1.43 1.44-1.92-1.92L6.2 12l-1.38-1.38 1.92-1.9 1.36 1.38 1.41-1.41 1.92 1.9L10.03 12zm9.16-1.46-1.41 1.41 1.48 1.48-1.92 1.9-1.48-1.48-1.44 1.45-1.9-1.92 1.45-1.43-1.38-1.38 1.9-1.92 1.38 1.38 1.41-1.41 1.92 1.92z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFacepunch;
