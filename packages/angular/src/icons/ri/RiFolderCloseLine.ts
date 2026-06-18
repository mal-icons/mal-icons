import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-folder-close-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFolderCloseLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3C2.45 3 2 3.45 2 4V20C2 20.55 2.45 21 3 21H13V19H4V5H9.59L11.59 7H20V12H22V6C22 5.45 21.55 5 21 5H12.41L10.41 3H3ZM20.41 18L22.54 20.12L21.12 21.54L19 19.41L16.88 21.54L15.46 20.12L17.59 18L15.46 15.88L16.88 14.46L19 16.59L21.12 14.46L22.54 15.88L20.41 18Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFolderCloseLine;
