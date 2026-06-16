import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-brightness-3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtBrightness3 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.7 4.91c1.46 2 2.3 4.46 2.3 7.09s-0.84 5.09-2.3 7.09A8 8 0 0 0 17 12a8 8 0 0 0-4.3-7.09z","opacity":".3"}],["path",{"d":"M9 2c-1.05 0-2.050.16-3 0.46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.540.950.3 1.950.46 3 0.46 5.52 0 10-4.48 10-10S14.52 2 9 2zm3.7 17.09c1.46-2 2.3-4.46 2.3-7.09s-0.84-5.09-2.3-7.09A8 8 0 0 1 17 12a8 8 0 0 1-4.3 7.09z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtBrightness3;
